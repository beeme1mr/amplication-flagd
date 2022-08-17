import { FlagConfiguration as TFlagConfiguration } from "../api/flagConfiguration/FlagConfiguration";

export const FLAGCONFIGURATION_TITLE_FIELD = "defaultVariant";

export const FlagConfigurationTitle = (record: TFlagConfiguration): string => {
  return record.defaultVariant || record.id;
};
