import { SortOrder } from "../../util/SortOrder";

export type FlagConfigurationOrderByInput = {
  createdAt?: SortOrder;
  defaultVariant?: SortOrder;
  environmentId?: SortOrder;
  flagDefinitionId?: SortOrder;
  id?: SortOrder;
  state?: SortOrder;
  targeting?: SortOrder;
  updatedAt?: SortOrder;
};
