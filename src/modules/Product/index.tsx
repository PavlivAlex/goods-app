import React, { useEffect } from 'react';

// helpers
import styled from 'styled-components';
import { products } from '../../redux/actions/products';
import { IProduct } from '../../interfaces/products';
import { useParams } from 'react-router-dom';
import { StateModel } from '../../redux/reducers';
import { getCurrentPrice } from '../../helpers/getCurrentPrice';
import { useDispatch, useSelector } from 'react-redux';

// components
import Rate from '../../components/Antd/Rate';
import Text from '../../components/Antd/Text';
import Carousel from '../../components/Antd/Carousel';
import { Content } from 'antd/es/layout/layout';
import { Col, Row } from 'antd';

const Product = () => {
  const { id } = useParams();
  const dispatch: any = useDispatch();

  const product = useSelector<StateModel, IProduct | null>(state => state.products.product);

  useEffect(() => {
    if (id) {
      dispatch(products.getCurrentProduct(id));
    }
  }, [id]);
  return (
    <StyledProductInfoBlock>
      {product && (
        <>
          {product.discountPercentage && <Discount>-{product.discountPercentage}%</Discount>}
          {product.rating >= 4.5 && <TopSale>TOP SALE</TopSale>}
          <Text size={24} weight={600}>
            {product?.title} ({product?.brand})
          </Text>
          <Row>
            <Col span={8}>
              <Carousel content={product?.images} />
            </Col>
            <Col span={16}>
              <StyledProductInfo>
                <Content>
                  {product.discountPercentage && <OldPrice>{product.price}$</OldPrice>}

                  <Text size={24} color={product.discountPercentage ? 'red' : 'black'}>
                    {getCurrentPrice(product.price, product.discountPercentage)}$
                  </Text>
                </Content>
                <Rate disabled value={product.rating} />

                <Text size={18}>In stock: {product.stock}</Text>
                <Text size={18} color='#686868'>
                  {product.description}
                </Text>
              </StyledProductInfo>
            </Col>
          </Row>
        </>
      )}
    </StyledProductInfoBlock>
  );
};

const StyledProductInfoBlock = styled(Content)`
  height: 100%;
  padding: 10px;
  position: relative;
`;

const Discount = styled.div`
  position: absolute;
  top: 45px;
  left: 10px;
  background: red;
  color: white;
  padding: 6px;
  border-radius: 30px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  font-size: 16px;
`;

const TopSale = styled.div`
  position: absolute;
  top: 85px;
  left: 10px;
  background: orange;
  color: white;
  padding: 6px;
  border-radius: 30px;
  z-index: 2;
`;

const StyledProductInfo = styled(Content)`
  padding-top: 24px;
  padding-left: 20px;
`;

export default Product;
