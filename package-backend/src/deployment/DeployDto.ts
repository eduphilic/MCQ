import { DeployableAppsEnum } from "./DeployableAppsEnum";
import { MulterFile } from "./MulterFile";

export type DeployDto = { [P in DeployableAppsEnum]?: MulterFile[] };
