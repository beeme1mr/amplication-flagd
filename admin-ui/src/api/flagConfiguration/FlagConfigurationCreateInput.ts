import { EnvironmentCreateNestedManyWithoutFlagConfigurationsInput } from "./EnvironmentCreateNestedManyWithoutFlagConfigurationsInput";

export type FlagConfigurationCreateInput = {
  environments?: EnvironmentCreateNestedManyWithoutFlagConfigurationsInput;
};
