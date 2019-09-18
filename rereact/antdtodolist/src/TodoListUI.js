/*
 * @Author: Harry.Wu
 * @Date: 2019-09-16 12:24:33
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-18 16:12:49
 * @Description:
 */
import React, { Component } from "react";
import { Button, List ,Input } from "antd";

class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            placeholder="hello"
            value={this.props.inputValue}
            style={{ width: "300px", marginRight: "10px" }}
            onChange={this.props.handleInputChange}
            id="div1"
          ></Input>
          <Button type="primary" onClick={this.props.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={index => {
                this.props.handleItemDelete(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI;
