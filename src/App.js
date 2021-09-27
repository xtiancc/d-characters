import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Router>
          <Switch>
            <Route exact path="/page/:id" component={Home} />
            <Route exact path="/details/:id" component={Details} />
            <Redirect to="/page/1" />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
