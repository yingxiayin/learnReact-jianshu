import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topics from './components/Topics';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
} from './style';

class Home extends PureComponent {

  static handleScrollTop() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
        <div>
          <HomeWrapper>
            <HomeLeft>
              <img
                  className='banner-img'
                  src="https://upload.jianshu.io/admin_banners/web_images/4893/6e36b3f156b00d596515a257d97101e67c1f0cd0.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                  alt="540"/>
              <Topics/>
              <List/>
            </HomeLeft>
            <HomeRight>
              <Recommend/>
              <Writer/>
            </HomeRight>
          </HomeWrapper>
          {this.props.showScroll ? <BackTop
              onClick={Home.handleScrollTop}>顶部</BackTop> : null}
        </div>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    }
    else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);