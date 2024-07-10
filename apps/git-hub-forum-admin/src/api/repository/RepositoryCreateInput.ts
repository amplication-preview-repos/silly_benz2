import { IssueCreateNestedManyWithoutRepositoriesInput } from "./IssueCreateNestedManyWithoutRepositoriesInput";

export type RepositoryCreateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  issues?: IssueCreateNestedManyWithoutRepositoriesInput;
};
