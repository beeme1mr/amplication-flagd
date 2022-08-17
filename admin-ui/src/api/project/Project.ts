import { Account } from "../account/Account";
import { Environment } from "../environment/Environment";
import { FlagDefinition } from "../flagDefinition/FlagDefinition";

export type Project = {
  account?: Account;
  createdAt: Date;
  description: string | null;
  environments?: Array<Environment>;
  flag?: Array<FlagDefinition>;
  id: string;
  name: string;
  updatedAt: Date;
};
