import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class ShopScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow"
        }}
      >
        <Text> This is the shop screen! </Text>
        <Button
          title="View product"
          onPress={() => this.props.onPressViewProduct()}
        />
      </View>
    );
  }
}
