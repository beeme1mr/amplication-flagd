import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type FlagDefinitionWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
};
