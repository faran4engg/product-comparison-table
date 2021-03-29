import Compare from 'app/domains/Products/components/Compare';
import ProductsContainer from 'app/domains/Products/containers/ProductsContainer';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Product Details Page" />
      </Helmet>
      <ProductsContainer>{props => <Compare {...props} />}</ProductsContainer>
    </>
  );
};

export default HomePage;
