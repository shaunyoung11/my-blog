import React, { Component } from 'react';
import Slink from '../../components/slink';
import store from '../../store';
import { getLink } from '../../store/actionCreators';
import './style.scss';

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
              <Slink
                className="item"
                name="title"
                link="https://shaunyoung.cn"
                description="description"
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
  storeChange() {
    this.setState(store.getState());
  }
}

export default Links;
