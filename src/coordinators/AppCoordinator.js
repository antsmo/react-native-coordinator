import React from "react";
import Coordinator from "./Coordinator";
import ShopScreen from "../screens/ShopScreen";
import ProductScreen from "../screens/ProductScreen";
import OrderScreen from "../screens/OrderScreen";

export default class AppCoordinator extends React.Component {
  constructor(props) {
    super(props);
    this.onPressViewProduct = this.onPressViewProduct.bind(this);
    this.onPressBuyNow = this.onPressBuyNow.bind(this);
    this.onPressPlaceOrder = this.onPressPlaceOrder.bind(this);
    this.state = {
      currentScreen: "shop"
    };
  }

  // Home Screen
  onPressViewProduct() {
    this.setState({ currentScreen: "product" });
  }

  // Product Screen
  onPressBuyNow() {
    this.setState({ currentScreen: "order" });
  }

  // Order Screen
  onPressPlaceOrder() {
    this.setState({ currentScreen: "shop" });
  }

  // Render
  render() {
    const { currentScreen } = this.state;
    const { onPressViewProduct, onPressBuyNow, onPressPlaceOrder } = this;
    return (
      <Coordinator {...{ currentScreen }}>
        <ShopScreen id="shop" {...{ onPressViewProduct }} />
        <ProductScreen id="product" {...{ onPressBuyNow }} />
        <OrderScreen id="order" {...{ onPressPlaceOrder }} />
      </Coordinator>
    );
  }
}
