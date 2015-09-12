import React, {Component} from 'react';

class DevotionListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.actions.showDevotion(this.props.devotion.id);
  }

  render() {
    const {devotion} = this.props;

    return (
      <li className="list-group-item" key={devotion.id} onClick={this.onClick}>{devotion.title}</li>
    );
  }
}


export default (DevotionListItem)
