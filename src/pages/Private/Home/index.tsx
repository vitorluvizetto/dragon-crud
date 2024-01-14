import React, { useCallback, useEffect, useState } from "react";

import { list, deleteDragon } from "../../../services/dragon.service";

import { convertToAlphabeticalOrder } from "../../../utils/convertToAlphabeticalOrder";

import "./styles.scss";
import Icon from "../../../components/Icon";
import { Delete, Edit } from "../../../assets";

const Home = (): React.ReactNode => {
  const [data, setData] = useState<Dragon[]>();

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

  return (
    <main className="dragon-list">
      <h1>Dragões</h1>

      <div className="dragon-list__container">
        {data?.length ? (
          data.map((dragon) => (
            <div key={dragon.id} className="dragon-list__container__card">
              <h3>{dragon.name}</h3>

              <div className="dragon-list__container__card__icons">
                <button>
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
  );
};

export default Home;
