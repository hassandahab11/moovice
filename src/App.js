import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorite from "./components/Favorite";
import PopularBattle from "./components/PopularBattele";
import Popular from "./components/Popular";
import Weekly from "./components/Weekly";
import Home from "./components/Home";
import WeeklyBattle from "./components/WeeklyBattle";
import Card from "./components/Card";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "./images/default.png",
      title: "",
      Year: "",
      description: ""
    }
  }
  render() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Film</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/weekly">weekly</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/weekly-battle">weekly-battle</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/popular">popular</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/popular-battle">popular-battle</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/favorite">favorite</Link></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} ></Route>
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