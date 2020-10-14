import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
import { Provider } from "react-redux";
import Menu from "./redux/containers/Menu"


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Menu/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
