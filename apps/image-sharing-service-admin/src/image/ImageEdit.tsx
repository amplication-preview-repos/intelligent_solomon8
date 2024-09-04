import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="group.id" reference="Group" label="group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <TextInput label="uploadedBy" source="uploadedBy" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
