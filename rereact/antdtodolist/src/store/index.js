/*
 * @Author: Harry.Wu
 * @Date: 2019-09-12 23:30:09
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-12 23:56:00
 * @Description:
 */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
