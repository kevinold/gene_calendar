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
    const {entries, title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);

    let entryList = entries.map((entry, index) => {
      return <li key={entry.id}>{entry.title}</li>
    });

    return (
      <main>
        <ul>
         {entryList}
        </ul>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
