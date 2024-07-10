import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ForumTitle } from "../forum/ForumTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
        <ReferenceInput source="forum.id" reference="Forum" label="forum">
          <SelectInput optionText={ForumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
