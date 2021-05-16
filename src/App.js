import './App.css';
import HomePage from './HomePage/HomePage';

import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const defaultState = {
    about: false,
    projects: false,
    contact: false
  };
  const [routerState, setRouterState] = useState(defaultState);
  useEffect(() => {
    setRouterState({ ...defaultState, about: true });
  }, [])
  return (
    <div>
      <div>
        <div style={{ paddingTop: "5px", display: "flex", justifyContent: "flex-end" }}>
          <Button className="mr-3 pl-2 pr-2" variant="primary" size="sm" onClick={() => setRouterState({ ...defaultState, about: true })}>About</Button>
          <Button className="mr-3 pl-2 pr-2" variant="primary" size="sm" onClick={() => setRouterState({ ...defaultState, projects: true })}>Projects</Button>
          <Button className="mr-3 pl-2 pr-2" variant="primary" size="sm" onClick={() => setRouterState({ ...defaultState, contact: true })}>Contact</Button>
        </div>
        <div>
          {routerState.about && (
            <HomePage />
          )}
          {routerState.projects && (
            <Projects />
          )}{routerState.contact && (
            <Contact />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
