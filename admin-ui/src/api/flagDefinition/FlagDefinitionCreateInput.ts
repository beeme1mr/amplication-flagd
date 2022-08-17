import { FlagConfigurationCreateNestedManyWithoutFlagDefinitionsInput } from "./FlagConfigurationCreateNestedManyWithoutFlagDefinitionsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type FlagDefinitionCreateInput = {
  flagConfigurations?: FlagConfigurationCreateNestedManyWithoutFlagDefinitionsInput;
  key: string;
  projects: ProjectWhereUniqueInput;
  variants: InputJsonValue;
};
