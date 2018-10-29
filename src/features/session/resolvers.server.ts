import { IResolvers } from "apollo-server-koa";
import { compareSync } from "bcryptjs";
import { SessionLoginRequestResult } from "../../models/SessionLoginRequestResult";
import { SessionUserServer } from "../../models/SessionUserServer";
import { SessionUserServerResumed } from "../../models/SessionUserServerResumed";
import { ServerContext } from "../../ServerContext";

export const resolvers: IResolvers<{}, ServerContext> = {
  Query: {
    sessionFormConfig: (_parent, _args, ctx) => {
      return ctx.firebaseRemoteConfigClient.getParameterByKey(
        "sessionFormConfig",
      );
    },
    currentAuthenticationStatus: (_parent, _args, ctx) => {
      const user = ctx.ctx.state.user as SessionUserServerResumed | null;
      return user
        ? {
            role: user.role,
            language: user.language,
          }
        : null;
    },
  },
  Mutation: {
    userLogin: async (
      _parent,
      args,
      ctx,
    ): Promise<SessionLoginRequestResult> => {
      const loginArgs: {
        phoneNumber: string;
        password: string;
      } = args as any;
      const db = ctx.firebaseDatabase;

      const querySnapshot = await db
        .collection("users")
        .where("phoneNumber", "==", loginArgs.phoneNumber)
        .limit(1)
        .get();

      if (querySnapshot.docs.length === 0) {
        return SessionLoginRequestResult.INVALID;
      }

      const user = querySnapshot.docs[0].data() as SessionUserServer;
      user.accountId = querySnapshot.docs[0].id;

      const valid = compareSync(loginArgs.password, user.passwordHash);
      if (!valid) return SessionLoginRequestResult.INVALID;

      const userResumed: SessionUserServerResumed = {
        accountId: user.accountId,
        language: user.language,
        role: user.role,
      };

      const sessionCookie = ctx.sessionCookieService.createSessionCookie(
        userResumed,
      );

      ctx.ctx.set("Cache-Control", "private");
      ctx.ctx.session!.user = sessionCookie;

      return SessionLoginRequestResult.VALID;
    },
  },
};
