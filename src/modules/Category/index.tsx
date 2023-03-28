import { Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// helpers
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Product from '../../components/Additionals/Product';
import { IProduct } from '../../interfaces/products';
import { products } from '../../redux/actions/products';
import { StateModel } from '../../redux/reducers';

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
    margin-top: 20px;
  }
`;

export default Category;
