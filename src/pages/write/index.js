import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import { actionCreators } from './store'
class Home extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if(!loginStatus){
      return (
          <div>写文字页面</div>
      )
    } else{
      return <Redirect to='/' />
    }
   
  }
}

const mapState = (state) => ({
   loginStatus : state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
  // login(accountElem, passwordElem) {
  //   dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  // }
})

export default connect(mapState, mapDispatch)(Home);