import axios from 'axios';
import uploadURL from 'config/constants';

export const uploadImageAsync = async (uri) => {
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
  return axios.post(uploadURL, data, config);
};
