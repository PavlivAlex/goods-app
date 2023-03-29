import React, { useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import { debounce } from 'lodash';
import { products } from '../../../redux/actions/products';
import { settings } from '../../../redux/actions/settings';
import { useDispatch } from 'react-redux';
import { FormikHelpers } from 'formik';
import { FormValuesModel } from '../../Forms/TemplateForms/Products';

// components
import Input from '../../Antd/Input';
import Button from '../../Antd/Button';
import FilterMenu from '../FilterMenu';
import SortingMenu from '../SortingMenu';
import Notification from '../../Antd/Notification';
import AddProductModal from '../../ModalWindows/AddProductModal';
import { Content } from 'antd/es/layout/layout';
import { PlusOutlined } from '@ant-design/icons';

const ProductsSettings = () => {
  const dispatch: any = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const initiaFormValues = useMemo<FormValuesModel>(
    () => ({
      title: '',
      brand: '',
      year: '',
      rating: 0,
      stock: null,
      price: null,
      category: '',
      description: '',
    }),
    [],
  );

  const handleSearch = (e: any) => {
    dispatch(products.getAllProducts(e.target.value));
  };

  const handleFilter = (e: string) => {
    dispatch(settings.handleFilter(e));
  };

  const handleSort = (e: string) => {
    dispatch(settings.handleSorting({ option: e }));
  };

  const handleSortType = (e: string) => {
    dispatch(settings.handleSorting({ type: e }));
  };

  const onSubmit = async (values: FormValuesModel, helpers?: FormikHelpers<FormValuesModel>) => {
    const response = dispatch(products.createProduct(values));
    if (response) {
      helpers?.resetForm();
      setIsNotificationVisible(true);
      setIsModalVisible(false);
    }
  };

  return (
    <StyledSettings>
      <StyledBlock>
        <Input allowClear placeholder='Search product' onChange={debounce(handleSearch, 500)} />
        <Button onClick={() => setIsModalVisible(true)}>
          <PlusOutlined />
          Add product
        </Button>
      </StyledBlock>
      <StyledBlock>
        <FilterMenu onChange={handleFilter} />
        <SortingMenu handleSort={handleSort} handleSortType={handleSortType} />
      </StyledBlock>
      <Notification
        description='You have successfully created a product!'
        type='success'
        isOpen={isNotificationVisible}
        closeCallback={() => setIsNotificationVisible(false)}
      />
      <AddProductModal
        initiaFormValues={initiaFormValues}
        isModalVisible={isModalVisible}
        onSubmit={onSubmit}
        closeCallback={() => setIsModalVisible(false)}
      />
    </StyledSettings>
  );
};

const StyledSettings = styled(Content)`
  .ant-input-affix-wrapper {
    width: 300px !important;
  }
`;

const StyledBlock = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
`;

export default ProductsSettings;
