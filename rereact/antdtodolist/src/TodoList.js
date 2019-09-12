/*
 * @Author: Harry.Wu
 * @Date: 2019-09-12 22:32:32
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-12 23:48:16
 * @Description:
 */
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { Button, List } from "antd";
import store from './store/index';


class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState()
        console.log(this.state)
    }

  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            placeholder="hello"
            value = {this.state.inputValue}
            style={{ width: "300px", marginRight: "10px" }}
          ></Input>
          <Button type="primary">提交</Button>
        </div>
        <List
        style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default TodoList;
