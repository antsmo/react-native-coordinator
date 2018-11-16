import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class ProductScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "aqua"
        }}
      >
        <Text> This is the product screen </Text>
        <Button title="Buy now" onPress={() => this.props.onPressBuyNow()} />
      </View>
    );
  }
}
