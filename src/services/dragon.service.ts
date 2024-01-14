import api from "./api";

export const list = (): Promise<[]> =>
  api
    .get("/dragon")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const find = (id: string): Promise<unknown> =>
  api
    .get(`/dragon/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const create = ({ data }: { data: unknown }): Promise<void> =>
  api
    .post("/dragon", data)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const update = ({
  data,
  id,
}: {
  data: unknown;
  id: string;
}): Promise<void> =>
  api
    .put(`/dragon/${id}`, data)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const deleteDragon = (id: string): Promise<unknown> =>
  api
    .delete(`/dragon/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
