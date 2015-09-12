import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

class Home extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    //dispatch(actions.requestInitialData);
  }

  render() {
    const {devotions, title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);

    let devotionList = devotions.map((entry, index) => {
      return <li className="list-group-item" key={entry.id}>{entry.title}</li>
    });

    return (
        <div className="list-group">
         {devotionList}
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
