import { axiosInstance } from '../axios/axios-instance';

const getProducts = async () => await axiosInstance.get('products/all');

export { getProducts };
