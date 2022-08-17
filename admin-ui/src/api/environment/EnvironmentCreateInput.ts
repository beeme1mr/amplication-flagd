import { FlagConfigurationCreateNestedManyWithoutEnvironmentsInput } from "./FlagConfigurationCreateNestedManyWithoutEnvironmentsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type EnvironmentCreateInput = {
  description?: string | null;
  flagConfigurations?: FlagConfigurationCreateNestedManyWithoutEnvironmentsInput;
  name: string;
  project: ProjectWhereUniqueInput;
};
