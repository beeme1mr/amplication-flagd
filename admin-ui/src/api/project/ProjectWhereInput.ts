import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnvironmentListRelationFilter } from "../environment/EnvironmentListRelationFilter";
import { FlagDefinitionListRelationFilter } from "../flagDefinition/FlagDefinitionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  environments?: EnvironmentListRelationFilter;
  flag?: FlagDefinitionListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
