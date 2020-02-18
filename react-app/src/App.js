import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import SecondPage from './SecondPage';
import Main from './Main';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Switch>
            <Route path="/second-page">
              <SecondPage />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <Route>
              <h1>404</h1>
              <Link
                  className="App-link"
                  to="/"
              >
                  Go Back to the Home Page
              </Link>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
