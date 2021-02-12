import { BrowserRouter as Router, Route } from 'react-router-dom';
import Archive from '../components/archive';
import About from '../components/pages/about';
import Links from '../components/pages/links';
import Header from '../components/universal/header';

function AppRouter() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Archive} />
        <Route path="/links" component={Links} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default AppRouter;
