import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Provider as ReduxProvider} from "react-redux";
import MainNavigator from "./MainNavigator";
import {makeStore} from "./store";

const store = makeStore();

const App = () => {
  return (
    <ReduxProvider store = {store}>
      <NavigationContainer>
        <MainNavigator></MainNavigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
export default App;