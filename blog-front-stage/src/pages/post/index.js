import React, { Component } from 'react';
import store from '../../store';
import { getPost } from '../../store/actionCreators';
import { Image, Tag, Typography } from 'antd';
import {
  IdcardOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  EyeOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import './style.scss';
import Hel from '../../components/universal/helmet';

const { Title } = Typography;

class Post extends Component {
  /**
   * 构造函数
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  render() {
    return (
      <div className="post">
        <Hel title={this.state.post.title}></Hel>
        <Image
          fallback="https://miro.medium.com/max/3200/0*yVM5UR4NAj_GKHr2.jpeg"
          className="cover"
          src={this.state.post.cover}
        ></Image>
        <Typography className="info">
          <Title>{this.state.post.title}</Title>
          <div className="detail">
            <Tag icon={<IdcardOutlined />} color="red">
              {this.state.siteName}
            </Tag>
            <Tag icon={<CalendarOutlined />} color="geekblue">
              {this.state.post.date}
            </Tag>
            <Tag icon={<FolderOpenOutlined />} color="green">
              {this.state.post.group}
            </Tag>
            <Tag icon={<EyeOutlined />} color="purple">
              {this.state.post.view}
            </Tag>
            <Tag icon={<CommentOutlined />} color="cyan">
              {this.state.post.comment}
            </Tag>
          </div>
        </Typography>
        <div
          className="content markdown"
          dangerouslySetInnerHTML={{ __html: this.state.post.contentHTML }}
        ></div>
      </div>
    );
  }

  componentDidMount() {
    const action = getPost(this.props.match.params.cid);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }
}

export default Post;
