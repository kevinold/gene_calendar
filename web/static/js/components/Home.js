import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import DevotionList from './DevotionList';
import DevotionListItemView from './DevotionListItemView';

class Home extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    //dispatch(actions.requestInitialData);
  }

  render() {
    const {devotion, devotions, title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);

    let content;

    if (devotion) {
      content = <DevotionListItemView devotion={devotion} />
    } else {
      content = <DevotionList actions={actions} {...this.props} />
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    devotions: state.devotions.entries,
    devotion: state.devotions.devotion
  }
}

export default connect(mapStateToProps)(Home)
