import React, { Component } from "react";

class Test extends Component {
  //当父组件当render重新执行时，它的子组件的render也会被重新执行一次

  render() {
    return <div>{this.props.content}</div>;
  }
}

export default Test;
