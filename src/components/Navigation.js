import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1 className="app=header">React Router Mini</h1>
        <div>
          <Link exact className="home-link" to="/">Home </Link>
        </div>
        <div>
          <Link exact className="about-link" to="/about"> About </Link>
        </div>
        <div>
          <Link exact className="contact" to="/contact"> Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
