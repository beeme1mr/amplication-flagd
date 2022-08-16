import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { EnvironmentTitle } from "../environment/EnvironmentTitle";
import { FlagDefinitionTitle } from "../flagDefinition/FlagDefinitionTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="environments"
          reference="Environment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EnvironmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="flag"
          reference="FlagDefinition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FlagDefinitionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
