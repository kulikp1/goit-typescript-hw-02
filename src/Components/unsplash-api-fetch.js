import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'RxBdooepDR0ixP-ix_YJHFnr7xxAa_Q0-3S5v_RoRGw';

export default async function getPhotos(searchQuery, page) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
      per_page: 12,
    },
  });
  return response.data;
}