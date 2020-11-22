import React from 'react';
import AddRemittance from "./pages/AddRemittance";
import Stories from "./pages/Stories";
import style from "./styles/main.scss"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


 

function App() {
  return (
    <div className={style.container}>
      <Router >
        <div className={style.header}>
          <NavLink to="/">Создание перевода</NavLink>
          <NavLink to="/Stories"> История</NavLink>
        </div>
        <Switch>
          <Route exact  path="/">
            <AddRemittance  />
          </Route>
          <Route path="/Stories">
            <Stories className={style.containerUl} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
