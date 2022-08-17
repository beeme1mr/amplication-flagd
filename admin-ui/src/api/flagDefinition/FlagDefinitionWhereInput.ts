import { FlagConfigurationListRelationFilter } from "../flagConfiguration/FlagConfigurationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type FlagDefinitionWhereInput = {
  flagConfigurations?: FlagConfigurationListRelationFilter;
  id?: StringFilter;
  key?: StringFilter;
  project?: ProjectWhereUniqueInput;
};
