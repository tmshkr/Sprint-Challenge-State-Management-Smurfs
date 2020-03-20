import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import SmurfList from "./components/SmurfList";

import { getSmurfs } from "./actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSmurfs());
  }, []);

  return (
    <main className="app">
      <SmurfList />
    </main>
  );
}

export default App;
