import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { EnvironmentTitle } from "../environment/EnvironmentTitle";

export const FlagConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="environments"
          reference="Environment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EnvironmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
