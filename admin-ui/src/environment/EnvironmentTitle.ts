import { Environment as TEnvironment } from "../api/environment/Environment";

export const ENVIRONMENT_TITLE_FIELD = "name";

export const EnvironmentTitle = (record: TEnvironment): string => {
  return record.name || record.id;
};
