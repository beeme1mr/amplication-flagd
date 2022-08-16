import { FlagConfigurationUpdateManyWithoutEnvironmentsInput } from "./FlagConfigurationUpdateManyWithoutEnvironmentsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type EnvironmentUpdateInput = {
  description?: string | null;
  flagConfiguration?: FlagConfigurationUpdateManyWithoutEnvironmentsInput;
  name?: string | null;
  project?: ProjectWhereUniqueInput;
};
