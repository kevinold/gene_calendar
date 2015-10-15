import React, {Component} from 'react';

class DevotionListItemView extends Component {
  /*constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.actions.showDevotion(this.props.devotion.id);
  }*/

  render() {
    const {devotion} = this.props;

    return (
      <div className="list-group-item">
        <h2>{devotion.get('title')}</h2>
        <h3>{devotion.get('description')}</h3>


      </div>
    );
  }
}


export default (DevotionListItemView)
