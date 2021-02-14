import React, { Component } from 'react';
import store from '../../store';
import { getArticle } from '../../store/actionCreators';
import { Pagination } from 'antd';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    store.subscribe(this.storeChange);
  }

  componentDidMount() {
    let group =
      this.props.match.params.group === undefined
        ? 'all'
        : this.props.match.params.group;
    const action = getArticle(group);
    store.dispatch(action);
  }

  render() {
    return (
      <div className="page">
        <div className="blog"></div>
        <div className="list">
          {this.state.articles.map((item, index) => {
            if (
              index >= (this.state.current - 1) * this.state.pageSize &&
              index < this.state.current * this.state.pageSize
            )
              return (
                <div className="list-item" key={index}>
                  <h2 className="title">{item.title}</h2>
                </div>
              );
          })}
          <Pagination
            current={this.state.current}
            pageSize={this.state.pageSize}
            total={this.state.articles.length}
            onChange={this.handlePageChange}
            hideOnSinglePage={true}
          />
        </div>
      </div>
    );
  }

  storeChange() {
    this.setState(store.getState());
  }

  handlePageChange(page) {
    this.setState({
      current: page,
    });
  }
}

export default Archive;
