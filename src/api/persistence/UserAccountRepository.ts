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

  /**
   * Returns a user account by the database id.
   * Returns null if the specified account is not found.
   *
   * @param id User's user account id.
   */
  async getUserById(id: string) {
    const documentReference = await this.getUserDocumentReferenceById(id);
    const querySnapshot = await documentReference.get();
    if (!querySnapshot.exists) return null;

    const user = querySnapshot.data() as UserAccount;
    user.id = querySnapshot.id;

    return user;
  }

  /**
   * Updates the specified user account. If the specified user account does not
   * exist, an error is thrown.
   *
   * @param id Id of user account to update.
   * @param update The fields to update.
   */
  async updateUser(id: string, update: Partial<Omit<UserAccount, "id">>) {
    this.assertNoIdField("updateUser", update);

    const documentReference = await this.getUserDocumentReferenceById(id);
    documentReference.update(update);
  }

  private async getUserDocumentReferenceById(id: string) {
    const documentReference = await this.db.collection("users").doc(id);

    return documentReference;
  }

  private assertNoIdField(
    operationName: string,
    userAccount: Partial<UserAccount>,
  ) {
    if (userAccount.id) {
      throw new Error(
        `Operation "${operationName}" must not receive an "id" field.`,
      );
    }
  }
}
