import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function SecondPage() {
  return (
    <Link
        className="App-link"
        to="/"
    >
        Go Back to the Home Page
    </Link>
  );
}

export default SecondPage;
