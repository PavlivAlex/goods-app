import React from 'react';

// helpers
import styled from 'styled-components';
import { debounce } from 'lodash';
import { products } from '../../../redux/actions/products';
import { useDispatch } from 'react-redux';

// components
import Input from '../../Antd/Input';
import FilterMenu from '../FilterMenu';
import SortingMenu from '../SortingMenu';
import AddProductModal from '../../ModalWindows/AddProductModal';
import { Content } from 'antd/es/layout/layout';

const ProductsSettings = () => {
  const dispatch: any = useDispatch();

  const handleSearch = (e: any) => {
    dispatch(products.getAllProducts(e.target.value));
  };
  return (
    <StyledSettings>
      <StyledBlock>
        <Input allowClear placeholder='Search product' onChange={debounce(handleSearch, 500)} />
        <AddProductModal />
      </StyledBlock>
      <StyledBlock>
        <FilterMenu />
        <SortingMenu />
      </StyledBlock>
    </StyledSettings>
  );
};

const StyledSettings = styled(Content)`
  .ant-input-affix-wrapper {
    width: 200px !important;
  }
`;

const StyledBlock = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
`;

export default ProductsSettings;
