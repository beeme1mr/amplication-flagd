import { ProjectCreateNestedManyWithoutFlagDefinitionsInput } from "./ProjectCreateNestedManyWithoutFlagDefinitionsInput";
import { InputJsonValue } from "../../types";

export type FlagDefinitionCreateInput = {
  key?: string | null;
  projects?: ProjectCreateNestedManyWithoutFlagDefinitionsInput;
  variants?: InputJsonValue;
};
