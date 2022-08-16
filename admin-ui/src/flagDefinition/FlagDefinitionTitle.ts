import { FlagDefinition as TFlagDefinition } from "../api/flagDefinition/FlagDefinition";

export const FLAGDEFINITION_TITLE_FIELD = "key";

export const FlagDefinitionTitle = (record: TFlagDefinition): string => {
  return record.key || record.id;
};
