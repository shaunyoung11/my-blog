import { BrowserRouter as Router, Route } from 'react-router-dom';
import Archive from '../pages/index';
import About from '../pages/about';
import Links from '../pages/link';
import Post from '../pages/post';
import MyFooter from '../components/universal/footer';
import MyHeader from '../components/universal/header';
import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

const { Header, Content, Footer } = Layout;

function AppRouter() {
  return (
    <ConfigProvider autoInsertSpaceInButton={false} locale={zhCN}>
      <Router>
        <Layout>
          <Header>
            <MyHeader />
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
    </ConfigProvider>
  );
}

export default AppRouter;
