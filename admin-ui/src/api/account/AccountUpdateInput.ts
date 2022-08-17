import { ProjectUpdateManyWithoutAccountsInput } from "./ProjectUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  description?: string | null;
  name?: string;
  projects?: ProjectUpdateManyWithoutAccountsInput;
};
