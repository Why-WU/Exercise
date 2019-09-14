/*
 * @Author: Harry.Wu
 * @Date: 2019-09-14 16:48:38
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-14 17:53:46
 * @Description:
 */
import { CHANGE_INPUT_VALUE } from "./actionType";
export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
