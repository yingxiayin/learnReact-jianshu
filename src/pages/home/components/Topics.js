import React, {PureComponent} from 'react';
import {TopicWrapper, TopicItem} from '../style';
import {connect} from 'react-redux';

class Topics extends PureComponent {
  render() {
    return (
        <TopicWrapper>
          {
            this.props.list.map((item) => {
              return (
                  <TopicItem key={item.get('id')}>
                    <img
                        className="topic-pic"
                        src={item.get('imgUrl')}
                        alt="120"
                    />
                    {item.get('title')}
                  </TopicItem>
              );
            })
          }
        </TopicWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList']),
});

export default connect(mapState, null)(Topics);