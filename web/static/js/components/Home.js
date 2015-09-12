import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import DevotionList from './DevotionList';

class Home extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    //dispatch(actions.requestInitialData);
  }

  render() {
    const {devotions, title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);

    return (
      <div>
      <DevotionList {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    devotions: state.devotions.entries
  }
}

export default connect(mapStateToProps)(Home)
