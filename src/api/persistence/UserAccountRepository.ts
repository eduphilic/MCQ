import { Firestore } from "@google-cloud/firestore";
import { UserAccount } from "../models";

export class UserAccountRepository {
  constructor(private db: Firestore) {}

  /**
   * Return the user that corresponds to the provided username or null if not
   * found.
   *
   * @param username User's username.
   */
  async getUserByUsername(username: string) {
    const querySnapshot = await this.db
      .collection("users")
      .where("username", "==", username)
      .limit(1)
      .get();

    if (querySnapshot.docs.length === 0) return null;

    const user = querySnapshot.docs[0].data() as UserAccount;
    user.id = querySnapshot.docs[0].id;

    return user;
  }
}
