import React from "react";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import MainTabNavigator from "./MainTabNavigator";

const AuthStack = createStackNavigator({ SignIn: LoginScreen });

export default createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  {
    Auth: AuthStack,
    Main: MainTabNavigator
  },
  {
    initialRouteName: "Auth"
  }
);
