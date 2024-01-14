import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../../components/Input";
import Button from "../../../components/Button";

import { UseAuth } from "../../../contexts/AuthContext";

import "./styles.scss";

const Login = (): React.ReactNode => {
  const navigate = useNavigate();
  const { login } = UseAuth();

  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();

      try {
        setLoading(true);
        await login(user.email, user.password);

        navigate("/home");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [navigate, login, user]
  );

  return (
    <main className="login">
      <section className="login__card">
        <h2>Entrar</h2>

        <form
          autoComplete="off"
          className="login__card__form"
          onSubmit={handleSubmit}
        >
          <Input
            name="email"
            type="text"
            label="Email"
            value={user.email}
            onChange={({ target }) =>
              setUser((old) => ({ ...old, email: target.value }))
            }
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            value={user.password}
            onChange={({ target }) =>
              setUser((old) => ({ ...old, password: target.value }))
            }
          />

          <Button
            disabled={loading || !user.email.length || !user.password.length}
            type="submit"
          >
            Login
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Login;
