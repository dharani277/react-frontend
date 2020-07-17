import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import STAFF from "./staff";
import STUDENT from "./student";
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/staff">STAFF</Link>
            </li>
            <br></br>
            <li>
              <Link to="/student">STUDENT</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/staff" component={STAFF} />
          <Route path="/student" component={STUDENT}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
