import { CloseOutlined } from '@ant-design/icons';
import { Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getCurrentPrice } from '../../../helpers/getCurrentPrice';
// import NoImage from '../../../assets/images/noImage.png';

// helpers
import { IProduct } from '../../../interfaces/products';
import { products } from '../../../redux/actions/products';

// components
import Rate from '../../Antd/Rate';
import Text from '../../Antd/Text';

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const dispatch: any = useDispatch();

  const [isHover, setIsHover] = useState(false);

  const handleRemoveProduct = () => {
    dispatch(products.deleteProduct(product.id));
  };

  return (
    <StyledProduct onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} span={6}>
      {product.discountPercentage && <Discount>-{product.discountPercentage}%</Discount>}
      {product.rating >= 4.5 && <TopSale>TOP SALE</TopSale>}
      {isHover && <RemoveIcon onClick={handleRemoveProduct} />}

      <ProductImage>
        <img src={product.thumbnail} alt='icon' />
      </ProductImage>

      <Text size={16} weight={600}>
        {product.title}
      </Text>
      <Rate disabled value={product.rating} />

      <OldPrice>{product.price}$</OldPrice>
      <Text size={20} color={product.discountPercentage ? 'red' : 'black'}>
        {getCurrentPrice(product.price, product.discountPercentage)}$
      </Text>
      <Text>In stock: {product.stock}</Text>
    </StyledProduct>
  );
};

const StyledProduct = styled(Col)`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 360px !important;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const RemoveIcon = styled(CloseOutlined)`
  position: absolute;
  right: 5px;
  top: 5px;
  height: 16px;
  width: 16px;
  svg {
    height: 100%;
    width: 100%;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Discount = styled.div`
  position: absolute;
  top: 5px;
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
  top: 5px;
  left: 80px;
  background: orange;
  color: white;
  padding: 6px;
  border-radius: 30px;
`;

const CurrentPrice = styled.span`
  color: red;
  font-size: 20px;
`;

export default Product;
