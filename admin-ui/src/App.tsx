import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { EnvironmentList } from "./environment/EnvironmentList";
import { EnvironmentCreate } from "./environment/EnvironmentCreate";
import { EnvironmentEdit } from "./environment/EnvironmentEdit";
import { EnvironmentShow } from "./environment/EnvironmentShow";
import { FlagDefinitionList } from "./flagDefinition/FlagDefinitionList";
import { FlagDefinitionCreate } from "./flagDefinition/FlagDefinitionCreate";
import { FlagDefinitionEdit } from "./flagDefinition/FlagDefinitionEdit";
import { FlagDefinitionShow } from "./flagDefinition/FlagDefinitionShow";
import { FlagConfigurationList } from "./flagConfiguration/FlagConfigurationList";
import { FlagConfigurationCreate } from "./flagConfiguration/FlagConfigurationCreate";
import { FlagConfigurationEdit } from "./flagConfiguration/FlagConfigurationEdit";
import { FlagConfigurationShow } from "./flagConfiguration/FlagConfigurationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"flagD"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Environment"
          list={EnvironmentList}
          edit={EnvironmentEdit}
          create={EnvironmentCreate}
          show={EnvironmentShow}
        />
        <Resource
          name="FlagDefinition"
          list={FlagDefinitionList}
          edit={FlagDefinitionEdit}
          create={FlagDefinitionCreate}
          show={FlagDefinitionShow}
        />
        <Resource
          name="FlagConfiguration"
          list={FlagConfigurationList}
          edit={FlagConfigurationEdit}
          create={FlagConfigurationCreate}
          show={FlagConfigurationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
