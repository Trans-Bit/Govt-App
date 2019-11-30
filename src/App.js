import React from "react";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Optimize from "./pages/optimize";
import "../node_modules/video-react/dist/video-react.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/optimize">
            <Optimize />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
