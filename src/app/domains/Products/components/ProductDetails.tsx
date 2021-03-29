/* eslint-disable react/no-array-index-key */
import { FilteredProductsEntity } from 'app/kernel/types';
import InfoItem from './InfoItem';

export interface ProductDetailsProps {
  product: Omit<FilteredProductsEntity, 'name' | 'productImage'>;
}

const renderBadges = badges =>
  badges
    .split('|')
    .map((url, index) => (
      <img className="w-5 h-5" key={index} src={url} alt="badges" />
    ));

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => (
  <ul className="text-sm font-bold">
    {Object.keys(product).map(item => (
      <InfoItem key={item}>
        {item === 'badges' ? (
          <div className="flex justify-center">
            {renderBadges(product[item])}
          </div>
        ) : (
          product[item]
        )}
      </InfoItem>
    ))}
  </ul>
);

export default ProductDetails;
