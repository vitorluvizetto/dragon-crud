import { useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UseAuth } from "../../contexts/AuthContext";

type Props = Children;

const Auth = ({ children }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = UseAuth();

  const checkLoggedUser = useCallback(() => {
    if (!currentUser) {
      let redirect = "";

      if (!currentUser && location.pathname.includes("home")) {
        redirect = location.pathname;
      }

      return navigate(`/login${redirect ? `?redirect=${redirect}` : ""}`, {
        replace: true,
      });
    }
  }, [currentUser, location.pathname, navigate]);

  useEffect(() => {
    checkLoggedUser();
  }, [checkLoggedUser]);

  return currentUser ? children : null;
};

export default Auth;
