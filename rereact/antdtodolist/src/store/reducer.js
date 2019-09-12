/*
 * @Author: Harry.Wu
 * @Date: 2019-09-12 23:33:37
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-13 00:06:18
 * @Description:
 */

const defaultState = {
    inputValue:'lalala',
    list:[1,2,3]
};

export default (state = defaultState, action) => {
  if(action.type === 'change_input_value'){
    
  }
  console.log(state,action)
  return state;
};
