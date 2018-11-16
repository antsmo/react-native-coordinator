import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class OrderScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange"
        }}
      >
        <Text> This is the order screen </Text>
        <Button
          title="Place order"
          onPress={() => this.props.onPressPlaceOrder()}
        />
      </View>
    );
  }
}
