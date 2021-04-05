import React, { Component } from 'react';
import Slink from '../../components/slink';
import Hel from '../../components/universal/helmet';
import store from '../../store';
import { getLink } from '../../store/actionCreators';
import './style.scss';

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    this.unsubscribe = store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div className="content-main">
        <Hel title="友链"></Hel>
        <div className="link-list">
          {this.state.link.map((item, index) => {
            return (
              <Slink
                key={item.name + item.link}
                className="item"
                name={item.name}
                link={item.url}
                avatar={item.logo}
                intro={item.title}
              ></Slink>
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
  componentWillUnmount() {
    this.unsubscribe();
  }
  storeChange() {
    this.setState(store.getState());
  }
}

export default Links;
