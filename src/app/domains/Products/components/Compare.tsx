import { CompareProps, FilteredProductsEntity } from 'app/kernel/types';
import { CardSkeleton } from 'app/domains/Common/components/loaders';
import { FC, useState } from 'react';
import { getProductFeaturesCaptionsHighlighted } from 'utils/getProductFeaturesCaption';
import ProductSelection from './ProductSelection';
import ComparisonTable from './ComparisonTable';
import NotFoundPage from './../../../pages/NotFoundPage/NotFoundPage';

const Compare: FC<CompareProps> = ({ products, isLoading }) => {
  const [selectedProducts, setSelectedProduts] = useState<
    FilteredProductsEntity[]
  >([]);
  const errorCls = 'flex items-center justify-center max-w-sm mx-auto mt-8';

  if (isLoading || !products?.length) {
    return <CardSkeleton noOfCards={3} />;
  }
  const captionsHighlighted = getProductFeaturesCaptionsHighlighted(products);

  const handleSelected = data => {
    if (!data.isSelected) {
      const selected = selectedProducts.filter(
        (prod: FilteredProductsEntity) => prod.id !== data.prodId,
      );
      setSelectedProduts(selected);
    } else {
      const prodToCompare = products.filter(
        prod => prod.id === data.prodId && data.isSelected,
      );
      setSelectedProduts(selectedProducts.concat(...prodToCompare));
    }
  };

  const Product = (
    <>
      <ProductSelection
        products={products}
        setSelectedProduts={handleSelected}
      />

      <ComparisonTable
        products={selectedProducts.length > 1 ? selectedProducts : products}
        captions={captionsHighlighted}
      />
    </>
  );

  return (
    <>
      {!isLoading && !products?.length && (
        <div className={errorCls}>
          <NotFoundPage />
        </div>
      )}
      {!isLoading && products.length && Product}
    </>
  );
};

export default Compare;
