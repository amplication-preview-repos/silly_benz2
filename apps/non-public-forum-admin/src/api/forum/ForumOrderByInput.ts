import { SortOrder } from "../../util/SortOrder";

export type ForumOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  title?: SortOrder;
  projectId?: SortOrder;
};
