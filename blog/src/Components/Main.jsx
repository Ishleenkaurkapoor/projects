import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import JoinUs from "./JoinUs";
import BlogsPage from "./BlogsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/joinus"> <JoinUs></JoinUs> </Route>
          <Route path="/aboutus"></Route>
          <Route path="/blogs/:genre">
            {" "}
            <BlogsPage></BlogsPage>{" "}
          </Route>
          <Route path="/">
      
                  <SignUp></SignUp>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
