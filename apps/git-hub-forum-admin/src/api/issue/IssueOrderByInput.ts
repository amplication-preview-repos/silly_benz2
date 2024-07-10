import { SortOrder } from "../../util/SortOrder";

export type IssueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  repositoryId?: SortOrder;
  assignee?: SortOrder;
};
