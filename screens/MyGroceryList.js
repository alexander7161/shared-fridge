import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

export default class MyGroceryList extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>My Grocery List</Text>
            <Image
              style={styles.icon}
              source={require("../assets/images/tasklist.png")}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>{"Add new item"}</Text>
            </View>
          </TouchableOpacity>
          <View>
            <FlatList
              data={[
                { key: "Eggs" },
                { key: "Rye flour" },
                { key: "Oat milk" }
              ]}
              renderItem={({ item }) => (
                <Text style={styles.listItem}>{item.key}</Text>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#fff",
    flex: 1
  },

  header: {
    margin: 50,
    backgroundColor: "#ff5207"
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "500"
  },

  listItem: {
    color: "white",
    fontSize: 20,
    padding: 10
  },

  button: {
    backgroundColor: "black",
    height: 50,
    width: 300,
    marginBottom: 20,
    borderRadius: 30
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },

  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: "center"
  }
});
