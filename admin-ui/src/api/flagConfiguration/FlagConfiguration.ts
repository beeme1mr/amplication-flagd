import { Environment } from "../environment/Environment";
import { FlagDefinition } from "../flagDefinition/FlagDefinition";
import { JsonValue } from "type-fest";

export type FlagConfiguration = {
  createdAt: Date;
  defaultVariant: string;
  environment?: Environment;
  flagDefinition?: FlagDefinition;
  id: string;
  state?: "ENABLED" | "DISABLED";
  targeting: JsonValue;
  updatedAt: Date;
};
