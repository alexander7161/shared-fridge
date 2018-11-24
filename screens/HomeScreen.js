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

import { connect } from "react-redux";

class MyGroceryList extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    console.log(this.props.groceryList);
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
          {this.props.groceryList && this.props.groceryList[0] ? (
            <FlatList
              data={this.props.groceryList}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>
                      {item.marketingName.english}
                    </Text>
                  </View>
                  <View style={{ alignSelf: "flex-end" }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "black",
                        height: 40,
                        width: 80
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 15,
                            fontWeight: "bold"
                          }}
                        >
                          Choose
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          ) : (
            <View />
          )}
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

function mapStateToProps(state) {
  return { groceryList: state.groceryList.groceryList };
}

export default connect(mapStateToProps)(MyGroceryList);
