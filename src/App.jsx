import { createBrowserHistory } from 'history';
import { useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from './components/Context';
import Home from "./views/Home";
import Pokemon from './views/Pokemon';

let BrowserHistory = createBrowserHistory();

function App() {
    const [pokemon,setPokemon] = useState(0);

    function updateContext(data) {
       setPokemon(data)
    }

    return (
      <Router history={BrowserHistory}>
          <Provider value={{state:pokemon,setContext:updateContext}}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/pokemon' component={Pokemon}/>
            </Switch>
          </Provider>
      </Router>
    );
}

export default App;
