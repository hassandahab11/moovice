import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Favorite from "./components/Favorite";
import PopularBattle from "./components/PopularBattele";
import Popular from "./components/Popular";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weekly">weekly</Link></li>
            <li><Link to="/weekly-battle">weekly-battle</Link></li>
            <li><Link to="/popular">popular</Link></li>
            <li><Link to="/popular-battle">popular-battle</Link></li>
            <li><Link to="/favorite">favorite</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={App} ></Route>
          <Route path="/weekly" component={Weekly}></Route>
          <Route path="/weekly-battle" component={WeeklyBattle}></Route>
          <Route path="/popular" component={Popular}></Route>
          <Route path="/popular-battle" component={PopularBattle}></Route>
          <Route path="/favorite" component={Favorite}></Route>
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
