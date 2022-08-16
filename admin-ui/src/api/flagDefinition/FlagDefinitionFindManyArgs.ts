import { FlagDefinitionWhereInput } from "./FlagDefinitionWhereInput";
import { FlagDefinitionOrderByInput } from "./FlagDefinitionOrderByInput";

export type FlagDefinitionFindManyArgs = {
  where?: FlagDefinitionWhereInput;
  orderBy?: Array<FlagDefinitionOrderByInput>;
  skip?: number;
  take?: number;
};
