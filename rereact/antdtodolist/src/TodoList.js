/*
 * @Author: Harry.Wu
 * @Date: 2019-09-12 22:32:32
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-15 12:59:14
 * @Description:
 */
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { Button, List } from "antd";
import store from "./store/index";
import { getInputChangeAction } from "./store/actionCreators";
import Test from "./test/test";

import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from "./store/actionType";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <Test></Test>
        <div>
          <Input
            placeholder="hello"
            value={this.state.inputValue}
            style={{ width: "300px", marginRight: "10px"}}
            onChange={this.handleInputChange}
            id='div1'
          ></Input>
          <Button type="primary" onClick={this.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = {
      type: ADD_TODO_ITEM
    };
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    };
    store.dispatch(action);
  }
}

export default TodoList;
