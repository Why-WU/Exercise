/*
 * @Author: Harry.Wu
 * @Date: 2019-09-12 23:33:37
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-14 16:45:15
 * @Description:
 */

import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from "./actionType";

const defaultState = {
  inputValue: "",
  list: []
};

//reducer可以接收state但是不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    console.log(newState);
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  // console.log(state, action);
  return state;
};
