import { ProjectCreateNestedManyWithoutAccountsInput } from "./ProjectCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  description?: string | null;
  name: string;
  projects?: ProjectCreateNestedManyWithoutAccountsInput;
};
