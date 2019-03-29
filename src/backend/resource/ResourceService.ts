import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  MethodNotAllowedException,
  NotFoundException,
} from "@nestjs/common";
import {
  ResourceEntity,
  ResourceEntityWithUserId,
  ResourceGetResponseDto,
  ResourceSetResourceDto,
  ResourceSetResourceResponseDto,
} from "../../common";
import { DatabaseService } from "../database";
import { RESOURCE_OPTIONS_PROVIDER } from "./RESOURCE_OPTIONS_PROVIDER";
import { ResourceOptions } from "./ResourceOptions";

/**
 * Gets and sets database entities for the specified resource.
 */
@Injectable()
export class ResourceService<Resource> {
  constructor(
    private databaseService: DatabaseService,
    @Inject(RESOURCE_OPTIONS_PROVIDER) private options: ResourceOptions,
  ) {}

  /**
   * Returns the requested resource.
   *
   * @param userId
   * Authenticated user (required if the resource is user restricted).
   */
  async getResource(userId: string | null) {
    const db = this.databaseService.getDatabase();
    const collectionReference = db.collection(this.options.resourceName);

    // Retrieve the entity for the authenticated user or return the public
    // entity.
    let resourceSnapshot: FirebaseFirestore.QuerySnapshot;
    if (userId) {
      const resourceQuery = collectionReference.where("userId", "==", userId);
      resourceSnapshot = await resourceQuery.get();
    } else {
      resourceSnapshot = await collectionReference.get();
    }

    if (resourceSnapshot.empty) throw new NotFoundException();

    const resourceEntity = resourceSnapshot.docs[0].data() as
      | ResourceEntity<Resource>
      | ResourceEntityWithUserId<Resource>;

    const resourceGetResponseDto: ResourceGetResponseDto<Resource> = {
      version: resourceEntity.version,
      data: resourceEntity.data,
      lastUpdateTime: resourceSnapshot.docs[0].updateTime.toMillis(),
    };

    // Sanity check.
    if (process.env.NODE_ENV === "development") {
      const expectedFields: (keyof ResourceGetResponseDto<Resource>)[] = [
        "version",
        "data",
        "lastUpdateTime",
      ];

      expectedFields.forEach(key => {
        if (resourceGetResponseDto[key] == null) {
          throw new InternalServerErrorException(
            `Entity is missing key: ${key}`,
          );
        }
      });
    }

    return resourceGetResponseDto;
  }

  /**
   * Updates the resource.
   *
   * @param userId
   * Authenticated user (required if the resource is user restricted).
   */
  async setResource(
    userId: string,
    resourceSetResourceDto: ResourceSetResourceDto<Resource>,
  ) {
    const db = await this.databaseService.getDatabase();
    const collectionReference = db.collection(this.options.resourceName);

    // Public static resources should not be writable.
    if (!this.options.isUserResource) {
      throw new MethodNotAllowedException("Resource is readonly.");
    }

    const querySnapshot = await collectionReference
      .where("userId", "==", userId)
      .get();

    let documentId: string;
    if (!querySnapshot.empty) {
      if (
        resourceSetResourceDto.lastUpdateTime !==
        querySnapshot.docs[0].updateTime.toMillis()
      ) {
        throw new ConflictException("Client resource out of date.");
      }

      documentId = querySnapshot.docs[0].id;
    } else {
      documentId = collectionReference.doc().id;
    }

    const resourceEntityWithUserId: ResourceEntityWithUserId<Resource> = {
      userId,
      version: resourceSetResourceDto.version,
      data: resourceSetResourceDto.data,
    };

    const writeResult = await collectionReference
      .doc(documentId)
      .set(resourceEntityWithUserId);

    const resourceSetResourceResponseDto: ResourceSetResourceResponseDto = {
      lastUpdateTime: writeResult.writeTime.toMillis(),
    };

    return resourceSetResourceResponseDto;
  }
}
