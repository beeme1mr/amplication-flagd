import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { EnvironmentUpdateManyWithoutProjectsInput } from "./EnvironmentUpdateManyWithoutProjectsInput";
import { FlagDefinitionUpdateManyWithoutProjectsInput } from "./FlagDefinitionUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  account?: AccountWhereUniqueInput;
  description?: string | null;
  environments?: EnvironmentUpdateManyWithoutProjectsInput;
  flag?: FlagDefinitionUpdateManyWithoutProjectsInput;
  name?: string;
};
