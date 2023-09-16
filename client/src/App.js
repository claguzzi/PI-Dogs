import NavBar from './components/NavBar/NavBar';
import { Landing, Home, Form, Detail } from './views';
import { Route, useLocation } from 'react-router-dom'
import styles from "./App.module.css"
import ByName from './components/ByName/ByName';



function App() {

  const location = useLocation();

  return (
    <div className={styles.App}>

      {location.pathname !== '/' && <NavBar />}

      <Route exact path='/'>
        <Landing />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/create'>
        <Form />
      </Route>

      <Route path='/detail/:id'>
        <Detail />
      </Route>

      <Route path='/byname'>
        <ByName/>
      </Route>
      
      
    </div>
  );
}

export default App;
