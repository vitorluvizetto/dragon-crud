import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { find } from "../../../../services/dragon.service";

import { convertToLocaleDate } from "../../../../utils/convertDate";

import "./styles.scss";

const Details = (): React.ReactNode => {
  const { id } = useParams();

  const [data, setData] = useState<Dragon>({
    name: "",
    type: "",
    histories: "",
    createdAt: "",
    id: "",
  });

  const handleFetch = useCallback(async () => {
    try {
      const response = await find(id);

      if (response) setData(response);
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [id]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <main className="details">
      {data.id.length ? (
        <section>
          <article className="details__container">
            <h1>Detalhes</h1>
            <h2>Nome: {data.name}</h2>
            <p>Tipo de dragão: {data.type}</p>
            <span>Criado em: {convertToLocaleDate(data.createdAt)}</span>
          </article>
        </section>
      ) : (
        <h1>Carregando...</h1>
      )}
    </main>
  );
};

export default Details;
