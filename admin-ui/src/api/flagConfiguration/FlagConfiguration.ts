import { Environment } from "../environment/Environment";

export type FlagConfiguration = {
  createdAt: Date;
  environments?: Array<Environment>;
  id: string;
  updatedAt: Date;
};
