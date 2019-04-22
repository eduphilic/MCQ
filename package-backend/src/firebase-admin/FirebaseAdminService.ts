import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";

@Injectable()
export class FirebaseAdminService {
  initialized = false;

  getInitializedAdminModule() {
    if (!this.initialized) admin.initializeApp();

    return admin;
  }
}
