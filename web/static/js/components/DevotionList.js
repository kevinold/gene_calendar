import React, {Component} from 'react';

class DevotionList extends Component {

  render() {
    const {devotions, dispatch} = this.props;

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


export default (DevotionList)
