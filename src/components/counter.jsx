import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  constructor(){
      super();
      // bind handle increment function
    //  this.handleIncrement =   this.handleIncrement.bind(this);
  }

  handleIncrement = () => {
    console.log("clicked");
  }

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
