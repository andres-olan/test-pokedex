import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import Home from "./views/Home";

let BrowserHistory = createBrowserHistory();

function App() {
    return (
      <Router history={BrowserHistory}>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
      </Router>
    );
}

export default App;
