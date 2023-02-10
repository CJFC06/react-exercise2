/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from "react";

import { Button, Image } from "antd";

export default class Counter extends Component {
  getName() {
    return this.props.counter.name;
  }

  render() {
    const { product } = this.props;
    return (
      <>
        <div className="m-4">
          {
            <>
              <a href={this.props.counter.image}>{this.getName()}</a>
              <br />
              <Image width={200} src={this.props.counter.image} />
              <br />
              <Button
                type="primary"
                className="ms-2"
                onClick={() => this.props.addToCart(product)}
              >
                Add to Cart<i className="fa-solid fa-cart-plus ms-2"></i>
              </Button>
            </>
          }
        </div>
      </>
    );
  }
}
