/*
 * @Author: Harry.Wu
 * @Date: 2019-09-12 23:30:09
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-12 23:41:42
 * @Description:
 */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
