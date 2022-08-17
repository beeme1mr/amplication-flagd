import { FlagConfigurationUpdateManyWithoutFlagDefinitionsInput } from "./FlagConfigurationUpdateManyWithoutFlagDefinitionsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type FlagDefinitionUpdateInput = {
  flagConfigurations?: FlagConfigurationUpdateManyWithoutFlagDefinitionsInput;
  key?: string;
  project?: ProjectWhereUniqueInput;
  variants?: InputJsonValue;
};
