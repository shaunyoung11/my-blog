import React, { Component } from 'react';
import store from '../../store';
import { getLink } from '../../store/actionCreators';
import './link.css';

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div className="content-main">
        <div className="link-list">
          {this.state.link.map((item, index) => {
            return (
              <a
                href={item.url}
                className="link-list-item"
                title={item.title}
                key={item + index}
              >
                <img className="item-logo" src={item.logo} alt={item.title} />
                <p className="item-name">{item.name}</p>
              </a>
            );
          })}
        </div>
        <div className="statement"></div>
      </div>
    );
  }
  componentDidMount() {
    const action = getLink();
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
}

export default Links;
