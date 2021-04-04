import { Avatar, Card } from 'antd';
import './style.scss';

const { Meta } = Card;

function Slink(props) {
  return (
    <a href={props.link} className={'s-link ' + props.className}>
      <Card bordered={false}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={props.name}
          description={props.description}
        />
      </Card>
    </a>
  );
}

export default Slink;
