import { FlagConfiguration } from "../flagConfiguration/FlagConfiguration";
import { Project } from "../project/Project";

export type Environment = {
  createdAt: Date;
  description: string | null;
  flagConfigurations?: Array<FlagConfiguration>;
  id: string;
  name: string;
  project?: Project;
  updatedAt: Date;
};
