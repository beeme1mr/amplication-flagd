import { Project } from "../project/Project";

export type Account = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  projects?: Array<Project>;
  updatedAt: Date;
};
