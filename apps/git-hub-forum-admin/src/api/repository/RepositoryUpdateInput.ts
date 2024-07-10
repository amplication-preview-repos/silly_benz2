import { IssueUpdateManyWithoutRepositoriesInput } from "./IssueUpdateManyWithoutRepositoriesInput";

export type RepositoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  issues?: IssueUpdateManyWithoutRepositoriesInput;
};
