import React from "react";
import "../styles/base.scss";
import { Link } from "react-router";

const App = ({ children }) => (
  <div>
    <Link className="navigation navigation--light" to="/">
      <h2 className="navigation__brand">KA</h2>
    </Link>
    {children}
  </div>
);

export default App;
