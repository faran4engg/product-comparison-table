import { NOT_TO_COMPARE_FEATURE } from 'app/kernel/constants';
import { FilteredProductsEntity, TableCaption } from 'app/kernel/types';
import { toTitleCase } from './toTitleCase';

export const getProductFeaturesCaptionsHighlighted = (
  products: FilteredProductsEntity[],
): TableCaption[] =>
  Object.keys(products[0]).map(feature => {
    const shouldHighlight =
      !NOT_TO_COMPARE_FEATURE.includes(feature) &&
      !products.every((prod, i, prodArr) => {
        return prod[feature] === prodArr[0][feature];
      });
    return {
      featureName: toTitleCase(feature),
      shouldHighlight,
    };
  });
