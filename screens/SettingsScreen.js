import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { View, Button, StyleSheet } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "My Account"
  };

  _signOut = async () => {
    // await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign out" onPress={this._signOut} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
