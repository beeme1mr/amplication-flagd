import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { EnvironmentCreateNestedManyWithoutProjectsInput } from "./EnvironmentCreateNestedManyWithoutProjectsInput";
import { FlagDefinitionCreateNestedManyWithoutProjectsInput } from "./FlagDefinitionCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  account: AccountWhereUniqueInput;
  description?: string | null;
  environments?: EnvironmentCreateNestedManyWithoutProjectsInput;
  flags?: FlagDefinitionCreateNestedManyWithoutProjectsInput;
  name: string;
};
