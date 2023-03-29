import React, { useEffect, useMemo } from 'react';

// helpers
import styled from 'styled-components';
import { IProduct } from '../../interfaces/products';
import { StateModel } from '../../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { products as productsActions } from '../../redux/actions/products';

// components
import Text from '../../components/Antd/Text';
import Product from '../../components/Additionals/Product';
import ProductsSettings from '../../components/Additionals/ProductsSettings';
import { Row } from 'antd';
import { Content } from 'antd/es/layout/layout';

const Home = () => {
  const dispatch: any = useDispatch();

  const products = useSelector<StateModel, IProduct[]>(state => state.products.products);
  const isUpdated = useSelector<StateModel, any>(state => state.products.isUpdated);

  const renderProducts = useMemo(() => {
    if (products && products.length) {
      return products.map(product => <Product key={product.id} product={product} />);
    } else {
      return (
        <Text size={20} color='gray'>
          No data found
        </Text>
      );
    }
  }, [products, isUpdated]);

  useEffect(() => {
    dispatch(productsActions.getAllProducts());
  }, []);

  return (
    <HomeContainer>
      <ProductsSettings />
      <Row gutter={[16, 16]}>{renderProducts}</Row>
    </HomeContainer>
  );
};

const HomeContainer = styled(Content)`
  height: 100%;
  padding: 0 8px;
  .ant-row {
    margin: 20px 0;
  }
`;

export default Home;
