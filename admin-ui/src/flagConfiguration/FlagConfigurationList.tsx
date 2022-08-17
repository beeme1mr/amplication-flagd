import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";
import { FLAGDEFINITION_TITLE_FIELD } from "../flagDefinition/FlagDefinitionTitle";

export const FlagConfigurationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Flag Configurations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
