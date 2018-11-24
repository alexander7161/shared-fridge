import React from "react";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import { View, Button, StyleSheet } from "react-native";

import MainTabNavigator from "./MainTabNavigator";

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    // await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Main");
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

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
