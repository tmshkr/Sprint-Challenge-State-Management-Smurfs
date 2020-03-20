import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import SmurfList from "./components/SmurfList";
import SmurfForm from "./components/SmurfForm";

import { getSmurfs } from "./actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSmurfs());
    // eslint-disable-next-line
  }, []);

  return (
    <main className="app">
      <Router>
        <Switch>
          <Route exact path="/smurfs" component={SmurfList} />
          <Route exact path="/smurfs/add" component={SmurfForm} />
          <Route exact path="/smurfs/edit/:id" component={SmurfForm} />
          <Redirect to="/smurfs" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
