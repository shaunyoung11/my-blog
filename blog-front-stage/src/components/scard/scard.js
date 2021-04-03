import { Card } from 'antd';

const { Meta } = Card;

function Scard(props) {
  return (
    <Card
      bordered={false}
      cover={<img src={props.cover} alt={props.title} />}
      loading
    >
      <Meta label={} />
    </Card>
  );
}

export default Scard;
