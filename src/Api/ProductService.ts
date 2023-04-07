import axios, { AxiosError, AxiosResponse } from 'axios';

interface Product {
  id: string;
  title: string;
  images: [];
  description: string;
  price: number;
  category: string;
  color: string;
}


export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const { data }: AxiosResponse<Product[]> = await axios.get('Products/product_data.json');

    const products = data;

    return products;
  } catch (error: AxiosError | any) {
    if (error.response) {
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.error('Error', error.message);
    }
    console.error(error.config);

    return [];
  }
};








