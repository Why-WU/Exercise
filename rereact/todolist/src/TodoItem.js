import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content } = this.props;
    return <div onClick={this.handleClick}>{content}</div>;
  }

  handleClick() {
    const { itemDelete, index } = this.props;
    itemDelete(index);
  }

  componentWillReceiveProps() {
    console.log("chid componentWillReceiveProps");
  }

  componentWillUnmount() {
    console.log("chid componentWillUnmount");
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  itemDelete: PropTypes.func,
  index: PropTypes.number
};

TodoItem.defaultProps = {};// 默认值设置

export default TodoItem;
