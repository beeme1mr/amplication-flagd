import { FlagConfigurationWhereInput } from "./FlagConfigurationWhereInput";
import { FlagConfigurationOrderByInput } from "./FlagConfigurationOrderByInput";

export type FlagConfigurationFindManyArgs = {
  where?: FlagConfigurationWhereInput;
  orderBy?: Array<FlagConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
