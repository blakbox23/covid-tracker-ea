import BodyList from './BodyList';
import Nav from './Nav';
import { Route, Switch } from 'react-router-dom';
import ItemDescription from './ItemDescription';
import Kenya from './countries/Kenya';
import Tanzania from './countries/Tanzania';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
        <BodyList />
        </Route>
        <Route path="/kenya">
          <Kenya />
        </Route>
        <Route path="/tanzania">
          <Tanzania/>
        </Route>
        <Route path="/uganda">
          <ItemDescription />
        </Route>
        <Route path="/rwanda">
          <ItemDescription />
        </Route>
      </Switch>
    </>
  );
}

export default App;
