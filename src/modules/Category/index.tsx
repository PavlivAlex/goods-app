import React, { useEffect, useMemo } from 'react';

// helpers
import styled from 'styled-components';
import { IProduct } from '../../interfaces/products';
import { products } from '../../redux/actions/products';
import { useParams } from 'react-router-dom';
import { StateModel } from '../../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';

// components
import Product from '../../components/Additionals/Product';
import { Row } from 'antd';
import { Content } from 'antd/es/layout/layout';

const Category = () => {
  const { name } = useParams();
  const dispatch: any = useDispatch();

  const productsByCategory = useSelector<StateModel, IProduct[]>(state => state.products.productsByCategory);

  const renderProducts = useMemo(() => {
    if (productsByCategory) {
      return productsByCategory?.map(product => <Product key={product.id} product={product} />);
    }
  }, [productsByCategory, name]);

  useEffect(() => {
    if (name) {
      dispatch(products.getProductsByCategory(name));
    }
  }, [name]);
  return (
    <CategoryContainer>
      <Row>{renderProducts}</Row>
    </CategoryContainer>
  );
};

const CategoryContainer = styled(Content)`
  height: 100%;
  .ant-row {
    margin: 20px 0;
  }
`;

export default Category;
