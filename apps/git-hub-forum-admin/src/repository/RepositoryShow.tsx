import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { REPOSITORY_TITLE_FIELD } from "./RepositoryTitle";

export const RepositoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="owner" source="owner" />
        <ReferenceManyField
          reference="Issue"
          target="repositoryId"
          label="Issues"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
