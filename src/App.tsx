import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/' component={HomeScreen} exact />
      </Switch>
    </Router>
  );
}

export default App;
