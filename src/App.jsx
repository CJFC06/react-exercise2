import React, { Children, Component } from "react";
import Carts from "./components/Carts";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import { Divider, Button } from "antd";

export default class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
        name: "Sapatos 1",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f2/Blucher_%28PSF%29.jpg",
      },
      {
        id: 2,
        value: 1,
        name: "Sapatos 2",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f2/Blucher_%28PSF%29.jpg",
      },
      {
        id: 3,
        value: 1,
        name: "Sapatos 3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f2/Blucher_%28PSF%29.jpg",
      },
    ],
    carts: [
      {
        id: 4,
        value: 1,
        name: "Sapatos 5",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f2/Blucher_%28PSF%29.jpg",
      },
    ],
  };

  handleDelete = (id) => {
    this.setState({
      carts: this.state.carts.filter((cart) => cart.id !== id),
    });
  };

  handleReset = () => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        return {
          ...cart,
          value: 1,
        };
      }),
    });
  };

  handleIncrement = (id) => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            value: cart.value + 1,
          };
        }
        return cart;
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            value: cart.value - 1,
          };
        }
        return cart;
      }),
    });
  };

  getCountersWithValue = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };
  getCartsWithValue = () => {
    return this.state.carts.filter((cart) => cart.value > 0).length;
  };
  addToCart = (info) => {
    this.setState({
      // cartProducts: this.state.cart.map((item) => { // hindi gumagana
      //   if (item.id === data.id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + data.quantity,
      //     };
      //   }
      //   return item;
      // }),
      cartProducts: (this.state.carts = [...this.state.carts, info]), 
    });
  };

  componentDidMount() {
    // api calls
    console.log("didmount");
  }

  render() {
    return (
      <>
        <Divider>Home</Divider>
        <div>
          <div className="container">
            <NavBar totalCount={this.getCartsWithValue()} />
            <Counters
              counters={this.state.counters}
              addtocart={this.addToCart}
            />
          </div>
        </div>
        <Divider>Cart</Divider>

        <div className="cart">
          {/* <NavBar totalCount={this.getCartsWithValue()} /> */}
          <Carts
            carts={this.state.carts}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </div>
      </>
    );
  }
}
