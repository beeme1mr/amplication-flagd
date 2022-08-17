import { FlagConfiguration } from "../flagConfiguration/FlagConfiguration";
import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type FlagDefinition = {
  createdAt: Date;
  flagConfigurations?: Array<FlagConfiguration>;
  id: string;
  key: string;
  projects?: Project;
  updatedAt: Date;
  variants: JsonValue;
};
