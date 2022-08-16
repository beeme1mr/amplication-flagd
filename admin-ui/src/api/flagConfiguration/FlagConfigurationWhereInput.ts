import { EnvironmentListRelationFilter } from "../environment/EnvironmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FlagConfigurationWhereInput = {
  environments?: EnvironmentListRelationFilter;
  id?: StringFilter;
};
