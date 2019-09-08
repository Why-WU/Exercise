import React, { Component, Fragment } from "react";
import "./style.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //组件的状态
      inputValue: "",
      list: []
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
            className="input"
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div>
                <TodoItem content={item} index={index} itemDelete={this.handleItemDelete.bind(this)} />
                {/*<li
                    key={index}
                    onClick={this.handleItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{ __html: item }}
                  >
                     {item} 
                 </li>*/}
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    // console.log(e.target.value);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许做任何改变

    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
    console.log(index);
  }
}

export default TodoList;
