import './App.css';
import { Route, Switch } from 'react-router-dom';
import CharactersList from './pages/CharacterList/CharactersList';
import Character from './pages/Character/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route strict exact path="/" component={CharactersList} />
        <Route strict exact path="/search" component={Search} />
        <Route strict exact path="/:id" component={Character} />
      </Switch>
    </div>
  );
}

export default App;
