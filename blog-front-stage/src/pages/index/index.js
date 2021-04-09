import React, { Component } from 'react';
import store from '../../store';
import { getArticle } from '../../store/actionCreators';
import Scard from '../../components/scard';
import './style.scss';
import Hel from '../../components/universal/helmet';
import { Pagination } from 'antd';

class Archive extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = store.getState();
    this.state.current = 1;
    this.state.pageSize = 9;
    this.state.group =
      this.props.match.params.group === undefined
        ? 'all'
        : this.props.match.params.group;
    this.storeChange = this.storeChange.bind(this); // store状态改变时触发的函数
    this.handlePageChange = this.handlePageChange.bind(this); // 处理页码改变
    this.unsubscribe = store.subscribe(this.storeChange); // 订阅store状态改变
  }

  componentDidMount() {
    const action = getArticle(
      this.state.group,
      this.state.current,
      this.state.pageSize
    );
    store.dispatch(action);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="page">
        <Hel></Hel>
        <div className="index-content">
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
        <Pagination
          className="pager"
          total={this.state.totalArticles}
          pageSize={this.state.pageSize}
          onChange={this.handlePageChange}
          hideOnSinglePage
        ></Pagination>
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
    console.log(page);
    this.setState({
      current: page,
    });
    const action = getArticle(this.state.group, page, this.state.pageSize);
    store.dispatch(action);
  }
}

export default Archive;
