import { FilteredProductsEntity, ProductsEntity } from 'app/kernel/types';
import removeNullFields from './removeNullFields';

export const getFilteredProductFeatures = (
  products?: ProductsEntity[],
): FilteredProductsEntity[] | undefined => {
  if (!products?.length) return undefined;

  const filtered = [];

  products.forEach((prod, index) => {
    const nonEmptyFields = removeNullFields(prod);
    const prodFeatureData = Object.keys(nonEmptyFields)
      .sort()
      .reduce((result, key) => {
        result[key] = nonEmptyFields[key];
        return result;
      }, {} as FilteredProductsEntity);
    prodFeatureData.id = `id-${index}`;
    // @ts-ignore
    filtered.push(prodFeatureData);
  });
  return putBadgesFirst(filtered);
};

const putBadgesFirst = productsData =>
  productsData.map(({ badges, ...others }) => ({ badges, ...others }));
