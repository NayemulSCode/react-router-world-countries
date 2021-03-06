import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Error404 from './Error/Error404';
import Country from './components/Country/Country';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/country/:callingCodes">
            <Country />
        </Route>
      <Route exact path="/home">
            <Home />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        
        <Route path="*">
            <Error404 />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
