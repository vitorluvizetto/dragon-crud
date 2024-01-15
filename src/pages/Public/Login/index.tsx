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
  const [error, setError] = useState<string>("");

  const handleSubmit = useCallback(
    async (event: React.SyntheticEvent) => {
      setError("");
      event.preventDefault();

      try {
        setLoading(true);
        await login(user.email, user.password);

        navigate("/home");
      } catch (error) {
        console.error((error as Error).message);
        if ((error as Error).message.includes("auth/invalid-credential")) {
          setError("Credenciais inválidas");
        }
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

        {!!error.length && <h4 className="login__error">{error}</h4>}
      </section>
    </main>
  );
};

export default Login;
