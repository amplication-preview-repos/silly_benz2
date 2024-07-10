import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ForumTitle } from "../forum/ForumTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
        <ReferenceInput source="forum.id" reference="Forum" label="forum">
          <SelectInput optionText={ForumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
