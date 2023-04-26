import client from "../../api/client";

const advertsURL = "/api/adverts";

export const getLatestAdverts = () => {
  return client.get(advertsURL);
};
