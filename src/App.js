import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { WatchList } from "./components/WatchList";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route exact path="/watched">
            <Watched />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
