import { FC, memo } from 'react';
import { useProducts } from 'app/hooks/queries-hooks/useProducts';
import { getFilteredProductFeatures } from 'utils/getFilteredProductFeatures';
import {
  ProductsContainerOwnProps,
  ProductsContainerRenderProps,
} from 'app/kernel/types';

const ProductsContainer: FC<
  ProductsContainerOwnProps & ProductsContainerRenderProps
> = ({ children }) => {
  const { data, isLoading } = useProducts();
  const filtered = getFilteredProductFeatures(data?.data.products);

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        products: filtered,
        isLoading,
      })}
    </div>
  );
};

export default memo(ProductsContainer);
