import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BodyList from './BodyList';
import ItemDescription from './ItemDescription';
import '../App.css';
import Info from './Info';

function App() {
  const countries = useSelector((state) => state.data.countries);

  return (
    <>
      <Switch>

        {countries.map((country) => (
          <Route exact path={`/${country.country}`} key={country}>
            <ItemDescription country={country.country} />
          </Route>
        ))}
        <Route exact path="/info">
          <Info />
        </Route>
        <Route exact path="/">
          <BodyList />
        </Route>

      </Switch>
    </>
  );
}

export default App;
