import React, { Component } from 'react';
import store from '../../store';
import { getArticle } from '../../store/actionCreators';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

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
        <div className="list">
          {this.state.articles.map((item, index) => {
            if (
              index >= (this.state.current - 1) * this.state.pageSize &&
              index < this.state.current * this.state.pageSize
            ) {
              return (
                // 每个文章卡片
                <div className="list-item" key={index}>
                  {/* 背景图片，具有模糊效果 */}
                  <div className="backdrop">
                    <img src={item.cover} alt="" />
                  </div>
                  {/* 文章头图，无模糊效果 */}
                  <Link to={'/post/' + item.cid}>
                    <div className="img">
                      <div className="abstract">
                        <p>{item.abstract}</p>
                      </div>
                      <img src={item.cover} alt="" />
                    </div>
                  </Link>
                  {/* 文章信息 */}
                  <div className="info">
                    {/* 标题 */}
                    <Link to={'/post/' + item.cid}>
                      <h2 className="title">{item.title}</h2>
                    </Link>
                    {/* 详细信息 */}
                    <div className="detail">
                      {/* 文章分类 */}
                      <div className="group">
                        <Link to={'/archives/' + item.group}>{item.group}</Link>
                      </div>
                      {/* 浏览量 */}
                      <div className="view">{item.view}</div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <Pagination
          current={this.state.current}
          pageSize={this.state.pageSize}
          total={this.state.articles.length}
          onChange={this.handlePageChange}
          hideOnSinglePage={true}
        />
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
