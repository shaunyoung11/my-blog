import { Avatar, Button, Typography } from 'antd';
import { MailOutlined, GithubOutlined } from '@ant-design/icons';
import './style.scss';

const { Title, Text } = Typography;

function Sintro(props) {
  return (
    <div className={'s-intro ' + props.className}>
      <Avatar className="avatar " src={props.avatar} size={135}></Avatar>
      <div className="info">
        <Typography className="detail">
          <Title className="d-item" level={4}>
            {props.name}
          </Title>
          <Text className="d-item" type="secondary">
            {props.intro}
          </Text>
        </Typography>
        <div className="btns">
          <Button
            size="medium"
            icon={<MailOutlined />}
            type="default"
            href={'mailto:' + props.mail}
          >
            Email
          </Button>
          <Button
            size="medium"
            icon={<GithubOutlined />}
            type="primary"
            href={props.github}
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sintro;
