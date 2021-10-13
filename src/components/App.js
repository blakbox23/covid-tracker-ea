import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BodyList from './BodyList';
import ItemDescription from './ItemDescription';
import '../App.css';

// import Kenya from '../countries/Kenya';
// import Tanzania from '../countries/Tanzania';

function App() {
  const countries = useSelector((state) => state.data.countries);

  return (
    <>
      <Switch>

        {countries.map((country) => (
          <Route path={`/${country.country}`} key={country}>
            <ItemDescription country={country.country} />
          </Route>
        ))}
        <Route exact path="/">
          <BodyList />
        </Route>

      </Switch>
    </>
  );
}

export default App;
