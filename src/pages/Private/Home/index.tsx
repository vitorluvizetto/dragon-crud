import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Icon from "../../../components/Icon";
import Update from "../Dragon/update";

import { list, deleteDragon } from "../../../services/dragon.service";
import { Delete, Edit } from "../../../assets";

import { convertToAlphabeticalOrder } from "../../../utils/convertToAlphabeticalOrder";

import "./styles.scss";

const Home = (): React.ReactNode => {
  const navigate = useNavigate();
  const [data, setData] = useState<Dragon[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dragonId, setDragonId] = useState<string>("");

  const handleFetch = useCallback(async () => {
    try {
      const response = await list();

      const sortedData = convertToAlphabeticalOrder(response);

      if (response) setData(sortedData as Dragon[]);
    } catch (error) {
      console.error((error as Error).message);
    }
  }, []);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const handleDelete = async (id: string) => {
    try {
      await deleteDragon(id);

      setData(data?.filter((dragon) => dragon.id !== id));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const goToDetails = (id: string) => navigate(`/details/${id}`);
  const openModal = (id: string) => {
    setDragonId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <main className="dragon-list">
        <h1>Dragões</h1>

        <div className="dragon-list__container">
          {data?.length ? (
            data.map((dragon) => (
              <div key={dragon.id} className="dragon-list__container__card">
                <div
                  onClick={() => goToDetails(dragon.id)}
                  className="dragon-list__container__card__name"
                >
                  <h3>{dragon.name}</h3>
                </div>

                <div className="dragon-list__container__card__icons">
                  <button onClick={() => openModal(dragon.id)}>
                    <Icon src={Edit} alt="Icone de Edição" />
                  </button>
                  <button onClick={() => handleDelete(dragon.id)}>
                    <Icon src={Delete} alt="Icone de Remoção" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2>Carregando...</h2>
          )}
        </div>
      </main>
      {!!dragonId.length && (
        <Update
          id={dragonId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          fetchList={handleFetch}
        />
      )}
    </>
  );
};

export default Home;
