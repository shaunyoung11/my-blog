import { Avatar, Typography } from 'antd';
import './style.scss';

const { Title, Text } = Typography;

function Slink(props) {
  return (
    <a href={props.link} className={'s-link ' + props.className}>
      <Avatar className="avatar" src={props.avatar} size={100}>
        Friend
      </Avatar>
      <div className="info">
        <Typography className="detail">
          <Title className="d-item" level={4}>
            {props.name}
          </Title>
          <Text className="d-item" type="secondary">
            {props.intro}
          </Text>
        </Typography>
      </div>
    </a>
  );
}

export default Slink;
