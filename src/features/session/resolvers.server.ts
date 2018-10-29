import { IResolvers } from "apollo-server-koa";
import { compareSync } from "bcryptjs";
import { SessionLoginRequestResult } from "../../models/SessionLoginRequestResult";
import { SessionUserServer } from "../../models/SessionUserServer";
import { ServerContext } from "../../ServerContext";

export const resolvers: IResolvers<{}, ServerContext> = {
  Query: {
    sessionFormConfig: (_parent, _args, ctx) => {
      return ctx.firebaseRemoteConfigClient.getParameterByKey(
        "sessionFormConfig",
      );
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

      const sessionCookie = ctx.sessionCookieService.createSessionCookie(user);

      ctx.ctx.set("Cache-Control", "private");
      // ctx.ctx.cookies.set("session", sessionCookie, cookieOptions);
      ctx.ctx.session!.user = sessionCookie;

      return SessionLoginRequestResult.VALID;
    },
  },
};
