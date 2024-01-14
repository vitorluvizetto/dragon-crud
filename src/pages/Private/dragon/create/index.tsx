import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../../../components/Input";
import Button from "../../../../components/Button";

import "./styles.scss";
import { create } from "../../../../services/dragon.service";
import { TextArea } from "../../../../components/TextArea";

const Create = (): React.ReactNode => {
  const navigate = useNavigate();
  const [data, setData] = useState<CreateDragon>({
    name: "",
    type: "",
    histories: "",
  });

  const handleCreate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await create({ data });

      if (response) {
        navigate("/home");
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <main className="create">
      <h1>Criar dragão</h1>

      <form autoComplete="off" onSubmit={handleCreate}>
        <Input
          label="Nome*"
          name="name"
          type="text"
          placeholder="Digite um nome"
          value={data.name}
          onChange={({ target }) =>
            setData((old) => ({ ...old, name: target.value }))
          }
          required
        />
        <Input
          label="Tipo*"
          name="type"
          type="text"
          placeholder="Digite um tipo"
          value={data.type}
          onChange={({ target }) =>
            setData((old) => ({ ...old, type: target.value }))
          }
          required
        />
        <TextArea
          label="Historias*"
          name="histories"
          placeholder="Digite uma historia"
          value={data.histories}
          onChange={({ target }) =>
            setData((old) => ({ ...old, histories: target.value }))
          }
          rows={5}
          required
        />

        <Button type="submit">Criar</Button>
      </form>
    </main>
  );
};

export default Create;
