import React from "react";

import { UseAuth } from "../../contexts/AuthContext";

import "./styles.scss";

const Header: React.FunctionComponent = () => {
  const { logout } = UseAuth();

  return (
    <nav className="header">
      <ul>
        <li>
          <button onClick={() => logout()}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
