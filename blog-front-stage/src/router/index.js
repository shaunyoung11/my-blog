import { BrowserRouter as Router, Route } from 'react-router-dom';
import Archive from '../components/archive';
import About from '../components/pages/about';
import Links from '../components/pages/links';
import Post from '../components/post';
import Footer from '../components/universal/footer';
import Header from '../components/universal/header';

function AppRouter() {
  return (
    <div>
      <Router>
        <Header
          logoUrl="https://shaun-logo.oss-cn-beijing.aliyuncs.com/my_info.png"
          siteName="小扬Shaun"
        />
        <Route path="/" exact component={Archive} />
        <Route path="/links" component={Links} />
        <Route path="/about" component={About} />
        <Route path="/archives/:group" component={Archive} />
        <Route path="/post/:cid" component={Post} />
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default AppRouter;
