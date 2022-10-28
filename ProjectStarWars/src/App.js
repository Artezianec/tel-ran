import './App.css';
import Main from './components/Main';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/blog" exact component={BlogPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
  );
}

export default App;
