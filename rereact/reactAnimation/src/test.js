/*
 * @Author: Harry.Wu
 * @Date: 2019-09-10 22:09:46
 * @LastEditors: Harry.Wu
 * @LastEditTime: 2019-09-10 22:09:46
 * @Description: 
 */
<CSSTransition
  in={this.state.show}
  timeout={1000}
  classNames="fade"
  unmountOnExit
  onEnter={el => {
    el.style.color = "blue";
  }}
  appear={true}
></CSSTransition>;
