import React, { Component } from "react";
import Cart from "./Cart";

import { Button } from "antd";
export default class Carts extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, onReset, carts } = this.props;
    return (
      <div className="m-4">
        {/* <button onClick={onReset} className="btn btn-primary ms-4 mt-2">
          Reset
        </button> */}
        <Button type="primary" danger onClick={onReset}>
          Reset
        </Button>
        {carts.map((cart) => (
          <Cart
            onDelete={onDelete}
            cart={cart}
            key={cart.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}
