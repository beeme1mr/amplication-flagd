import { ProjectCreateNestedManyWithoutAccountsInput } from "./ProjectCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  description?: string | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutAccountsInput;
};
