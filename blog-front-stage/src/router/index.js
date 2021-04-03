import { BrowserRouter as Router, Route } from 'react-router-dom';
import Archive from '../pages/index';
import About from '../pages/about/about';
import Links from '../pages/link/link';
import Post from '../pages/post/post';
import MyFooter from '../components/universal/footer';
import MyHeader from '../components/universal/header';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Header>
          <MyHeader
            logoUrl="https://shaun-logo.oss-cn-beijing.aliyuncs.com/my_info.png"
            siteName="小扬Shaun"
          />
        </Header>
        <Content>
          <Route path="/" exact component={Archive} />
          <Route path="/links" component={Links} />
          <Route path="/about" component={About} />
          <Route path="/archives/:group" component={Archive} />
          <Route path="/post/:cid" component={Post} />
        </Content>
        <Footer>
          <MyFooter></MyFooter>
        </Footer>
      </Layout>
    </Router>
  );
}

export default AppRouter;
