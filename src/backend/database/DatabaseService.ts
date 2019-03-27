import { Injectable, OnModuleInit } from "@nestjs/common";
import * as admin from "firebase-admin";
import { ConfigService } from "../config";

/**
 * Initializes and provides access to Firebase Firestore.
 */
@Injectable()
export class DatabaseService implements OnModuleInit {
  private db!: FirebaseFirestore.Firestore;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const serviceAccount = this.configService.getServerConfig().serviceAccount;
    const databaseURL = this.configService.getServerConfig().databaseURL;

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      databaseURL,
    });

    this.db = admin.firestore();
  }

  /**
   * Returns the initialized Firestore database instance.
   */
  getInstance() {
    return this.db;
  }
}
