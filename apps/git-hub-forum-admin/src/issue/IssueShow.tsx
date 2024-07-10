import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ISSUE_TITLE_FIELD } from "./IssueTitle";
import { REPOSITORY_TITLE_FIELD } from "../repository/RepositoryTitle";

export const IssueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="repository"
          source="repository.id"
          reference="Repository"
        >
          <TextField source={REPOSITORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="assignee" source="assignee" />
        <ReferenceManyField
          reference="Comment"
          target="issueId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <TextField label="author" source="author" />
            <ReferenceField label="issue" source="issue.id" reference="Issue">
              <TextField source={ISSUE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
