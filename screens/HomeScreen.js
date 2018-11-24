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
    // const firstItem =
    //   this.props.groceryList[0] && this.props.groceryList[0][0].ean;
    // console.log(typeof firstItem, firstItem);
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
          {this.props.groceryList[0] ? (
            <FlatList
              data={this.props.groceryList}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: "black", fontSize: 20 }}>
                      {item.marketingName.english}
                    </Text>
                  </View>
                  <View style={{ alignSelf: "flex-end" }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "black",
                        height: 40,
                        width: 80,
                        borderRadius: 30,
                        alignContent: "flex-end"
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
    backgroundColor: "#fff",
    flex: 1
  },
  header: {
    margin: 50
  },
  title: {
    color: "#ff5207",
    fontSize: 30,
    fontWeight: "500"
  },
  listItem: {
    color: "black",
    fontSize: 20,
    padding: 10
  },
  add_button: {
    backgroundColor: "#ff5207",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    width: 300
  },
  add_buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 30
  },
  add_buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  list_button: {
    backgroundColor: "#ff5207",
    height: 40,
    width: 80,
    margin: 5,
    borderRadius: 30
  },
  list_buttonText: {
    color: "#fff",
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
