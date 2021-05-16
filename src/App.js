import './App.css';
import HomePage from './HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
      <Router>
          <div style={{ paddingTop: "5px", display: "flex", justifyContent: "flex-end" }}>
            <Link className="mr-3" to="/about">About</Link>
            <Link className="mr-3" to="/projects" >Projects</Link>
            <Link className="mr-3" to="/contact" >Contact</Link>
          </div>

          <Switch>
            <Route exact path="/">
              <Redirect to="/about" />
            </Route>
            <Route exact path="/Portfolio">
              <Redirect to="/about" />
            </Route>
            <Route path="/about">
              <HomePage />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
