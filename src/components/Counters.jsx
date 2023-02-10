import React, { Component } from "react";
import Counter from "./Counter";
import { Button } from "antd";

export default class Counters extends Component {
  render() {
    const { counters, addToCart } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter counter={counter} addToCart={addToCart} key={counter.id} />
        ))}
      </div>
    );
  }
}
