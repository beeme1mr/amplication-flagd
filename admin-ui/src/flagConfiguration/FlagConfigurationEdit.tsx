import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EnvironmentTitle } from "../environment/EnvironmentTitle";
import { FlagDefinitionTitle } from "../flagDefinition/FlagDefinitionTitle";

export const FlagConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Default Variant" source="defaultVariant" />
        <ReferenceInput
          source="environment.id"
          reference="Environment"
          label="Environments"
        >
          <SelectInput optionText={EnvironmentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="flagdefinition.id"
          reference="FlagDefinition"
          label="Flag Definition"
        >
          <SelectInput optionText={FlagDefinitionTitle} />
        </ReferenceInput>
        <SelectInput
          source="state"
          label="State"
          choices={[
            { label: "Enabled", value: "ENABLED" },
            { label: "Disabled", value: "DISABLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <div />
      </SimpleForm>
    </Edit>
  );
};
