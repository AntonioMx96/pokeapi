import Detail from './pages/Detail'
import Pokemons from './pages/Pokemons'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Pokemons />
          </Route>
          <Route path="/pokemons/:id" component={Detail}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
