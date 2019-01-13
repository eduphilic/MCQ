import { DataLoadersContext } from "./DataLoadersContext";
import { DataLoaders } from "./loaders";
import { CloudinaryService } from "./services";

export type ApolloContext = DataLoadersContext & {
  cloudinaryService: CloudinaryService;
  loaders: DataLoaders;
};
