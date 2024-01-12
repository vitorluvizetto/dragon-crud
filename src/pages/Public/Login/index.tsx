import React from "react";

import { Input } from "../../../components/Input";
import Button from "../../../components/Button";

import "./styles.scss";

const Login = (): React.ReactNode => {
  return (
    <main className="login">
      <section className="login__title">
        <h1>Dragões</h1>
      </section>
      <section className="login__card">
        <h2>Entrar</h2>

        <Input name="email" type="text" label="Email" />
        <Input name="password" type="password" label="Senha" />

        <Button onClick={() => {}}>Login</Button>
      </section>
    </main>
  );
};

export default Login;
