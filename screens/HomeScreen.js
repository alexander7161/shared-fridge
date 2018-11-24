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
        <View style={styles.header}>
          <Text style={styles.title}>My Grocery List</Text>
        </View>
        <TouchableOpacity style={styles.add_button}>
          <View style={styles.add_buttonView}>
            <Text style={styles.add_buttonText}>{"Add new item"}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <FlatList
            data={[
              {
                key: "6410405111340",
                name: "Pirkka vähälaktoosinen mieto maitorahka 250 g"
              },
              { key: "Oat milk", name: "Oatly Kaurajuoma 1l" },
              { key: "pinaatti", name: "Pirkka Pinaatti" }
            ]}
            renderItem={({ item }) => (
              <View style={styles.flex}>
                <Text style={styles.listItem}>{item.name}</Text>
                <TouchableOpacity style={styles.list_button}>
                  <View style={styles.list_buttonView}>
                    <Text style={styles.list_buttonText}>{"Choose"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#ff5207",
    flex: 1
  },

  header: {
    margin: 50
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

  add_button: {
    backgroundColor: "black",
    height: 50,
    width: 300,
    marginBottom: 20
  },

  add_buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },

  add_buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  list_button: {
    backgroundColor: "black",
    height: 40,
    width: 80,
    margin: 5
  },

  list_buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },

  list_buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  flex: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    flex: 1
  }
});
