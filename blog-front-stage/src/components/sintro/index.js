import { Avatar, Button, Typography } from 'antd';
import { MailOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function Sintro(props) {
  return (
    <div className="s-intro">
      <Avatar className="avatar" src={props.avatar} size={135}></Avatar>
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
            size="small"
            icon={<MailOutlined />}
            href={'mailto:' + props.mail}
          >
            Email
          </Button>
          <Button size="small" icon={<GithubOutlined />} href={props.github}>
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sintro;
