import "./InputNumber.css";

import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
  }

  handleInput = (e) => {
    this.setState({ quantity: e.target.value });
  };

  increase = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decrease = (e) => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  render() {
    const { quantity } = this.state;
    return (
      <div className="def-number-input number-input safari_only">
        <div>
          <button onClick={(e) => this.decrease(e)} className="minus" />
          <input
            className="quantity"
            min="0"
            name="quantity"
            value={quantity}
            type="number"
            onChange={(e) => this.handleInput(e)}
          />
          <button className="plus" onClick={this.increase} />
        </div>
      </div>
    );
  }
}
