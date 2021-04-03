import { Avatar, Image, Tag, Typography } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';
import './style.scss';

const { Title, Text } = Typography;

function Scard(props) {
  return (
    <div className={'s-card ' + props.className}>
      <Image preview={false} className="cover" src={props.cover} />
      <div className="content">
        <Typography>
          <Tag className="group" icon={<FolderOpenOutlined />} color="geekblue">
            {props.group}
          </Tag>
          <Title level={2} className="title">
            {props.title}
          </Title>
          <Text className="abstract" type="secondary">
            {props.abstract}
          </Text>
        </Typography>
        <div className="info">
          <Avatar className="avatar" src={props.avatar}></Avatar>
          <Text className="author">{props.author}</Text>
        </div>
      </div>
    </div>
  );
}

export default Scard;
