import { DataLoadersContext } from "./DataLoadersContext";
import { DataLoaders } from "./loaders";
import { mediator } from "./resolvers";
import { CloudinaryService } from "./services";

export type ApolloContext = DataLoadersContext & {
  cloudinaryService: CloudinaryService;
  loaders: DataLoaders;
  mediator: typeof mediator;
};
