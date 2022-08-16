import { ProjectUpdateManyWithoutFlagDefinitionsInput } from "./ProjectUpdateManyWithoutFlagDefinitionsInput";
import { InputJsonValue } from "../../types";

export type FlagDefinitionUpdateInput = {
  key?: string | null;
  projects?: ProjectUpdateManyWithoutFlagDefinitionsInput;
  variants?: InputJsonValue;
};
