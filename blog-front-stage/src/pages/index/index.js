import React, { Component } from 'react';
import store from '../../store';
import { getArticle } from '../../store/actionCreators';
import Scard from '../../components/scard';
import './style.scss';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this); // store状态改变时触发的函数
    this.handlePageChange = this.handlePageChange.bind(this); // 处理页码改变
    store.subscribe(this.storeChange); // 订阅store状态改变
  }

  componentDidMount() {
    let group =
      this.props.match.params.group === undefined
        ? 'all'
        : this.props.match.params.group;
    const action = getArticle(group, this.state.current, this.state.pageSize);
    store.dispatch(action);
  }

  render() {
    return (
      <div className="page">
        {this.state.articles.map((item, value) => {
          return (
            <Scard
              key={item.title + item.cid}
              className="item"
              cid={item.cid}
              title={item.title}
              abstract={item.abstract}
              group={item.group}
              date={item.date}
              avatar={this.state.siteLogo}
              cover={item.cover}
              author={this.state.siteName}
            ></Scard>
          );
        })}
      </div>
    );
  }

  storeChange() {
    this.setState(store.getState());
  }

  /**
   *
   * @param {number} page
   */
  handlePageChange(page) {
    // 将传入的page设置为current
    this.setState({
      current: page,
    });
  }
}

export default Archive;
