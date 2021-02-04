import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Archive from '../components/archive';

function Index() {
  return <h1>Index</h1>;
}

function List() {
  return <h1>List</h1>;
}

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/list/" component={List} />
      <Route path="/archive" component={Archive} />
    </Router>
  );
}

export default AppRouter;
