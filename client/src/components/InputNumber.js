import "./InputNumber.css";

import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
  }

  increase = () => {
    //only if the count is less than the max
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decrease = (e) => {
    //only if the count is more than the min
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
          />
          <button className="plus" onClick={this.increase} />
        </div>
      </div>
    );
  }
}
