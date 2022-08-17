import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FlagConfigurationTitle } from "../flagConfiguration/FlagConfigurationTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const FlagDefinitionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="flagConfigurations"
          reference="FlagConfiguration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FlagConfigurationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Key" source="key" />
        <ReferenceInput
          source="project.id"
          reference="Project"
          label="Projects"
        >
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
