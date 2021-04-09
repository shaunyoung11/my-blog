import { Avatar, Image, Tag, Typography } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';
import './style.scss';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function Scard(props) {
  return (
    <Link className={'s-card ' + props.className} to={'/post/' + props.cid}>
      <Image
        fallback="https://miro.medium.com/max/3200/0*yVM5UR4NAj_GKHr2.jpeg"
        preview={false}
        className="cover"
        src={props.cover}
      />
      <div className="content">
        <Typography>
          <Tag className="group" icon={<FolderOpenOutlined />} color="geekblue">
            {props.group}
          </Tag>
          <Title level={3} className="title" title={props.title}>
            {props.title}
          </Title>
          <Text className="abstract" type="secondary" title={props.abstract}>
            {props.abstract}
          </Text>
        </Typography>
        <div className="info">
          <Avatar className="avatar" src={props.avatar}></Avatar>
          <Text className="author">{props.author}</Text>
          <Text className="date">{props.date}</Text>
        </div>
      </div>
    </Link>
  );
}

export default Scard;
