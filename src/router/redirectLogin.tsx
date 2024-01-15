import { useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Props = Children;

const PublicRedirect = ({ children }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const checkRoute = useCallback(() => {
    if (!location.pathname.includes("login")) {
      return navigate(`/login`, {
        replace: true,
      });
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    checkRoute();
  }, [checkRoute]);

  return location.pathname.includes("login") ? children : null;
};

export default PublicRedirect;
