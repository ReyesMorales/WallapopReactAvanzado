import client from '../../api/client';

const advertsURL = '/api/v1/adverts';

export const getLatestAdverts = () => {
  return client.get(advertsURL);
};

export const createAdvert = (advert) => {
  return client.post(advertsURL, advert, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const getAdvertDetail = (advertId) => {
  return client.get(`${advertsURL}/${advertId}`);
};

export const deleteAdvert = (advertId) => {
  return client.delete(`${advertsURL}/${advertId}`);
}

export const getTags = () => {
  return client.get(`${advertsURL}/tags`);
}