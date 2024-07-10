import { SortOrder } from "../../util/SortOrder";

export type RepositoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  owner?: SortOrder;
};
