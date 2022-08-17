import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";
import { FLAGDEFINITION_TITLE_FIELD } from "./FlagDefinitionTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const FlagDefinitionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Key" source="key" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Variants" source="variants" />
        <ReferenceManyField
          reference="FlagConfiguration"
          target="FlagDefinitionId"
          label="Flag Configurations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Default Variant" source="defaultVariant" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Flag Definition"
              source="flagdefinition.id"
              reference="FlagDefinition"
            >
              <TextField source={FLAGDEFINITION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="State" source="state" />
            <TextField label="Targeting" source="targeting" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
