import { Injectable, OnModuleInit } from "@nestjs/common";
import * as admin from "firebase-admin";

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  onModuleInit() {
    admin.initializeApp();
  }

  getInitializedAdminModule() {
    return admin;
  }
}
