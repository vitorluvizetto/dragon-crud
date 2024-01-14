import api from "./api";

export const list = (): Promise<Dragon[]> =>
  api
    .get("/dragon")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const find = (id: string): Promise<Dragon> =>
  api
    .get(`/dragon/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const create = ({ data }: { data: CreateDragon }): Promise<Dragon> =>
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
  data: CreateDragon;
  id: string;
}): Promise<void> =>
  api
    .put(`/dragon/${id}`, data)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const deleteDragon = (id: string): Promise<void> =>
  api
    .delete(`/dragon/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
