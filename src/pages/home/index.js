import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { BackTop } from './style';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://img2.baidu.com/it/u=2254188701,678351681&fm=26&fmt=auto&gp=0.jpg" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeDate()
        this.bindEvents();
    }

    componentWillUnmount(){
        window.addEventListener('scroll',this.props.changeScrollTopshow)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopshow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeDate() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopshow(e){
        console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})


export default connect(mapState, mapDispatch)(Home);