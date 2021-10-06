import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Router>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/page/:id" component={Home} />
              <Route exact path="/details/:id" component={Details} />
              <Redirect to="/page/1" />
            </Switch>
          </Suspense>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
