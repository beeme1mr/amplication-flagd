import { FlagConfiguration as TFlagConfiguration } from "../api/flagConfiguration/FlagConfiguration";

export const FLAGCONFIGURATION_TITLE_FIELD = "id";

export const FlagConfigurationTitle = (record: TFlagConfiguration): string => {
  return record.id || record.id;
};
