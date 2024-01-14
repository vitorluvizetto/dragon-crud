import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { UseAuth } from "../../contexts/AuthContext";

import "./styles.scss";

const Header: React.FunctionComponent = () => {
  const { logout } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const goToCreateDragon = () => navigate("/create", { replace: true });
  const goBack = () => navigate("/home");

  return (
    <nav className="header">
      <ul>
        <li>
          {!location.pathname.includes("create") ? (
            <button onClick={goToCreateDragon}>Criar dragão</button>
          ) : (
            <button onClick={goBack}>Voltar</button>
          )}
        </li>
        <li>
          <button onClick={() => logout()}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
