import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import TopBar from './component/TopBar';
import Login from './pages/Login';
import Subjects from './pages/Subjects';
import Grades from './pages/Grades';
import Curriculum from './pages/Curriculum';

export default function App() {

  return (
    <div>
      <TopBar />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/subjects">
          <Subjects />
        </Route>
        <Route path="/grades">
          <Grades />
        </Route>
        <Route path="/curriculum">
          <Curriculum />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}