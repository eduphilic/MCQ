import { IResolvers } from "apollo-server-koa";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { SessionLoginRequestResult } from "../../models/SessionLoginRequestResult";
import { SessionUserServer } from "../../models/SessionUserServer";
import { ServerContext } from "../../ServerContext";

const expiresInMilliseconds = 60 * 60 * 24 * 14 /* 14 days */ * 1000;
// const SALT_ROUNDS = 10;
const cookieOptions = {
  maxAge: expiresInMilliseconds,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};
const JWT_SECRET = "^aoqJQ5onoOzay0wmFoW";

export const resolvers: IResolvers<{}, ServerContext> = {
  Mutation: {
    login: async (_parent, args, ctx): Promise<SessionLoginRequestResult> => {
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

      const valid = compareSync(loginArgs.password, user.passwordHash);
      if (!valid) return SessionLoginRequestResult.INVALID;

      const sessionCookie = sign(
        {
          phoneNumber: user.phoneNumber,
        },
        JWT_SECRET,
        {
          expiresIn: expiresInMilliseconds / 1000,
        },
      );

      ctx.ctx.set("Cache-Control", "private");
      ctx.ctx.cookies.set("session", sessionCookie, cookieOptions);

      return SessionLoginRequestResult.VALID;
    },
  },
};
