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
        <Scard
          className="item"
          title="1111"
          abstract="22222"
          group="333"
          author="小扬Shaun"
          avatar="https://shaun-logo.oss-cn-beijing.aliyuncs.com/my_info.png"
          cover="https://miro.medium.com/max/2048/0*NndyxXhtNtRO-49K.jpg"
        ></Scard>
        <Scard
          className="item"
          title="1111"
          abstract="22222"
          group="333"
          author="小扬Shaun"
          avatar="https://shaun-logo.oss-cn-beijing.aliyuncs.com/my_info.png"
          cover="https://miro.medium.com/max/2048/0*NndyxXhtNtRO-49K.jpg"
        ></Scard>
        <Scard
          className="item"
          title="1111"
          abstract="22222"
          group="333"
          author="小扬Shaun"
          avatar="https://shaun-logo.oss-cn-beijing.aliyuncs.com/my_info.png"
          cover="https://miro.medium.com/max/2048/0*NndyxXhtNtRO-49K.jpg"
        ></Scard>
        <Scard
          className="item"
          title="1111"
          abstract="22222"
          group="333"
          author="小扬Shaun"
          avatar="https://shaun-logo.oss-cn-beijing.aliyuncs.com/my_info.png"
          cover="https://miro.medium.com/max/2048/0*NndyxXhtNtRO-49K.jpg"
        ></Scard>
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
