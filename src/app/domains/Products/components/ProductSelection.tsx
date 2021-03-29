import { FilteredProductsEntity } from 'app/kernel/types';

import Image from './Image';

export interface ProductSelectionProps {
  products: FilteredProductsEntity[];
  setSelectedProduts: (data: { prodId: string; isSelected: boolean }) => void;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({
  products,
  setSelectedProduts,
}) => {
  return (
    <section className="grid w-full grid-cols-4 gap-6 mx-auto mt-4 mb-4 max-w-7xl lg:grid-cols-5 ">
      <div className="invisible hidden justify-self-center lg:block">lol</div>
      {products.map(prod => (
        <Image
          key={prod.productImage}
          imgUrl={prod.productImage}
          prodId={prod.id}
          onClick={setSelectedProduts}
        />
      ))}
    </section>
  );
};

export default ProductSelection;
