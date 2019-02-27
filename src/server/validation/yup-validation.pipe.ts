import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { Schema } from "yup";

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private schema: Schema<unknown>) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === "custom") return value;
    let validatedValue: unknown;

    try {
      validatedValue = await this.schema.validate(value, {
        abortEarly: true,
        stripUnknown: true,
      });
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        /* tslint:disable-next-line:no-console */
        console.error(e);
      }
      throw new BadRequestException("Validation failed.");
    }

    return validatedValue;
  }
}
