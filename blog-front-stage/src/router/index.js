import { BrowserRouter as Router, Route } from 'react-router-dom';
import Archive from '../components/archive';
import Links from '../components/pages/links';
import Header from '../components/universal/header';

function AppRouter() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Archive} />
        <Route path="/links" component={Links} />
        <Route path="/archive/:group" component={Archive} />
      </Router>
    </div>
  );
}

export default AppRouter;
