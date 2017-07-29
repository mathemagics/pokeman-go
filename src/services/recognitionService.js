import axios from 'axios';
import recognitionURL from 'config/constants';

export const recognizeFaceAsync = async (url) => {
  const uriParts = uri.split('.');
  const fileType = uriParts[uriParts.length - 1];

  const data = new FormData();

  data.append('data', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  const config = {
    headers: {
      Accept: 'application/json',
      'content-type': 'multipart/form-data',
    },
  };
  return axios.post(recognitionURL, data, config);
};
