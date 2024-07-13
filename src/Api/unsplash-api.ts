import axios, { AxiosResponse } from 'axios';
import { FetchImages } from './unsplash-api.types';

const API_KEY = 'jjCRPzrxadrk_T1R5NACzD0KTZUZsKPkF_iarTpTaMU';
const BASE_URL = `https://api.unsplash.com/search/photos/`;

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
}

interface FetchImagesResponse {
  results: UnsplashImage[];
}

const options = {
  headers: { Authorization: `Client-ID ${API_KEY}` },
};

export const fetchImages: FetchImages = async (query: string, page: number): Promise<UnsplashImage[]> => {
  const searchParams = new URLSearchParams({
    query,
    page: page.toString(),
    per_page: '20',
  });

  const response: AxiosResponse<FetchImagesResponse> = await axios.get(`${BASE_URL}?${searchParams}`, options);
  return response.data.results;
};
