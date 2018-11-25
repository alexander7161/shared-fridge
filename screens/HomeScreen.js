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
import { FloatingAction } from "react-native-floating-action";
import { getProduct } from "../store/resolveEANs";
import { connect } from "react-redux";

class MyGroceryList extends React.Component {
  state = {
    replaceString: ""
  };

  static navigationOptions = {
    title: "My Shopping List",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#ff5207"
    }
  };

  _getItem(ean) {
    getProduct(ean).then(result => {
      this.setState({ replaceString: result.marketingName.english });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.props.groceryList[0] ? (
            <FlatList
              data={this.props.groceryList}
              renderItem={({ item }) => {
                if (item.type === "replace") {
                  this._getItem(item.product_ean);
                }
                return (
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ padding: 10, maxWidth: 320 }}>
                      <Text style={{ color: "#000000", fontSize: 20 }}>
                        {item.marketingName.english}
                      </Text>
                      <Text style={{ color: "#8C8C8C", fontSize: 20 }}>
                        {item.type + " "}

                        {item.type === "borrow"
                          ? "from " +
                            item.location +
                            " between " +
                            item.availability
                          : item.type === "replace"
                          ? "with " + this.state.replaceString
                          : item.type === "coop"
                          ? "with " + item.friends.join(", ")
                          : ""}
                      </Text>
                    </View>
                    <View style={{ alignSelf: "flex-end" }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#ff5207",
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
                );
              }}
            />
          ) : (
            <View />
          )}
        </View>
        <FloatingAction
          actions={[
            {
              icon: {
                uri: "http://icons-for-free.com/free-icons/png/512/352003.png"
              },
              iconHeight: "100%",
              iconWidth: "100%",
              text: "Add",
              name: "bt_add",
              position: 2
            }
          ]}
          color={"#ff5207"}
          overrideWithAction
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
        />
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
    color: "#1f2e2e",
    fontSize: 20,
    padding: 10
  },
  add_button: {
    marginTop: 16,
    backgroundColor: "#ff5207",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    width: 45
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
