import { SortOrder } from "../../util/SortOrder";

export type LabelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  color?: SortOrder;
};
