import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { FlagDefinitionWhereUniqueInput } from "../flagDefinition/FlagDefinitionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type FlagConfigurationUpdateInput = {
  defaultVariant?: string;
  environments?: EnvironmentWhereUniqueInput;
  flagDefinition?: FlagDefinitionWhereUniqueInput;
  state?: "ENABLED" | "DISABLED";
  targeting?: InputJsonValue;
};
