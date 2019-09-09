import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //组件的状态
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            className="input"
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem
            content={item}
            index={index}
            itemDelete={this.handleItemDelete}
          />
          {/*<li
                key={index}
                onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}
              >
                 {item} 
             </li>*/}
        </div>
      );
    });
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    //prevState = this.state
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许做任何改变
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
