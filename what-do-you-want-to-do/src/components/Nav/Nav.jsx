import React from "react";
import { Link } from "react-router-dom";

export const NavJsx = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Activities">
        <button>Activities</button>
      </Link>
      <Link to="/Entertainment">
        <button>Entertainment</button>
      </Link>
      <Link to="/Events">
        <button>Events</button>
      </Link>
      <Link to="/Food">
        <button>Food</button>
      </Link>
      <Link to="/Shopping">
        <button>Shopping</button>
      </Link>
    </div>
  );
};
