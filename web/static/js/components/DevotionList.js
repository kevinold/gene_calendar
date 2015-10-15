import React, {Component} from 'react';
import DevotionListItem from './DevotionListItem';

class DevotionList extends Component {

  render() {
    const {devotions, actions} = this.props;

    let devotionList = devotions.map((devotion, index) => {
      return <DevotionListItem key={devotion.get('id')} devotion={devotion} actions={actions} />
    });

    return (
      <div className="list-group">
        {devotionList}
      </div>
    );
  }
}


export default (DevotionList)
