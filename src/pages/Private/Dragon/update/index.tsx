import React, { useCallback, useEffect, useState } from "react";

import { Input } from "../../../../components/Input";
import { TextArea } from "../../../../components/TextArea";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";

import { find, update } from "../../../../services/dragon.service";

import "./styles.scss";

const Update = ({
  setIsModalOpen,
  isModalOpen,
  id,
  fetchList,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  id: string;
  fetchList: () => object;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dragon, setDragon] = useState<CreateDragon>({
    name: "",
    type: "",
    histories: "",
  });

  const handleFetch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await find(id);

      if (response) setDragon(response);
    } catch (error) {
      console.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const handleUpdate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await update({ data: dragon, id });
      setIsModalOpen(false);
      fetchList();
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={onClose} title="Editar dragão">
      {id && !loading ? (
        <form
          className="update-form"
          autoComplete="off"
          onSubmit={handleUpdate}
        >
          <Input
            label="Nome*"
            name="name"
            type="text"
            placeholder="Digite um nome"
            value={dragon.name}
            onChange={({ target }) =>
              setDragon((old) => ({ ...old, name: target.value }))
            }
            required
          />
          <Input
            label="Tipo*"
            name="type"
            type="text"
            placeholder="Digite um tipo"
            value={dragon.type}
            onChange={({ target }) =>
              setDragon((old) => ({ ...old, type: target.value }))
            }
            required
          />
          <TextArea
            label="Historias*"
            name="histories"
            placeholder="Digite uma historia"
            value={dragon.histories}
            onChange={({ target }) =>
              setDragon((old) => ({ ...old, histories: target.value }))
            }
            rows={5}
            required
          />

          <Button type="submit">Salvar</Button>
        </form>
      ) : (
        <h2>Carregando...</h2>
      )}
    </Modal>
  );
};

export default Update;
