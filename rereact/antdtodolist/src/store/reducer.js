/*
 * @Author: Harry.Wu
 * @Date: 2019-09-12 23:33:37
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-14 16:33:19
 * @Description:
 */

const defaultState = {
  inputValue: "",
  list: []
};

//reducer可以接收state但是不能修改state
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    console.log(newState);
    return newState;
  }
  if (action.type === "delete_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  // console.log(state, action);
  return state;
};
