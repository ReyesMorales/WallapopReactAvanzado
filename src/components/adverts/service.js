import client from '../../api/client';

const advertsURL = '/api/v1/adverts';

export const getLatestAdverts = () => {
  return client.get(advertsURL);
};

export const createAdvert = (advert) => {
  return client.post(advertsURL, advert, {});
};

export const getAdvertDetail = (advertId) => {
  return client.get(`${advertsURL}/${advertId}`);
};
