/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from "react";

import { Button, Image, Card, Row, Col, Space } from "antd";

export default class Counter extends Component {
  getName() {
    return this.props.counter.name;
  }

  render() {
    const { counter, children } = this.props;
    return (
      <>
        {children}
        <div className="m-4  ">
          {
            <>
              <Card
                title={this.getName()}
                bordered={true}
                hoverable
                style={{
                  width: 240,
                  textAlign: "center",
                }}
              >
                <Image width={200} src={this.props.counter.image} />
                <p></p>
                <Button
                  type="primary"
                  className="ms-2"
                  onClick={() => this.props.addToCart(counter)}
                >
                  Add to Cart<i className="fa-solid fa-cart-plus ms-2"></i>
                </Button>
              </Card>
            </>
          }
        </div>
      </>
    );
  }
}
