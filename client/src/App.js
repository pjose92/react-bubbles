import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage"
import PrivateRoute from "./components/PrivateRoute"
import "./styles.scss";

function App() {
  return (
    <Router>
        <div className="App">
        <PrivateRoute path="/" component={BubblePage} />
         <Route exact path="/login" component={Login} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
        </div>
    </Router>
  );
}

export default App;
