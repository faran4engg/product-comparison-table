import { useQuery } from 'react-query';
import { getProducts } from 'app/queries/index';

export const useProducts = () =>
  useQuery(`product-info`, getProducts, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
