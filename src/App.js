import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import loggedInPage from './pages/loggedin';
import volunteerForm from './pages/volunteerForm';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/loggedin' component={loggedInPage} exact />
          <Route path='/volunteer' component={volunteerForm} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
