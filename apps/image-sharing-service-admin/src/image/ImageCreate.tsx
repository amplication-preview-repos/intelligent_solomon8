import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="group.id" reference="Group" label="group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <TextInput label="uploadedBy" source="uploadedBy" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
