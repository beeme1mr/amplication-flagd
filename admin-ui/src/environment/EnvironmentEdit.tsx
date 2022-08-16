import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FlagConfigurationTitle } from "../flagConfiguration/FlagConfigurationTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const EnvironmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="flagConfiguration"
          reference="FlagConfiguration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FlagConfigurationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
