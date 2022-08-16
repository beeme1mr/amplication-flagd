import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type FlagDefinition = {
  createdAt: Date;
  id: string;
  key: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
  variants: JsonValue;
};
