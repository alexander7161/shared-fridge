import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { updateGroceryListFromServer } from "../store/actions";

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
    this.props.dispatch(updateGroceryListFromServer());
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

export default connect()(SignInScreen);
