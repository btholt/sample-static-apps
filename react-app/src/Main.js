import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.svg';


const Main = () => (
  <Link
    className="App-link"
    to="/second-page"
  >
    Go to Second Page
  </Link>
);

export default Main;