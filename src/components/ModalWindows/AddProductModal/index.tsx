import React, { useMemo, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import Button from '../../Antd/Button';
import ModalWindow from '../../Antd/ModalWindow';
import AddProductForm, { FormValuesModel } from '../../Forms/TemplateForms/Products';
import { products } from '../../../redux/actions/products';

const AddProductModal = () => {
  const dispatch: any = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const initiaFormValues = useMemo<FormValuesModel>(
    () => ({
      title: '',
      brand: '',
      year: '',
      rating: 0,
      price: 0,
      discountPercentage: 0,
      category: '',
      description: '',
    }),
    [],
  );

  const onSubmit = async (values: FormValuesModel) => {
    const response = dispatch(products.createProduct(values));
    if (response) {
      setIsModalVisible(false);
    }
  };
  return (
    <>
      <Button onClick={() => setIsModalVisible(true)}>
        <PlusOutlined />
        Add product
      </Button>
      <ModalWindow title='Creating product' isVisible={isModalVisible} closeCallback={() => setIsModalVisible(false)}>
        <AddProductForm initialFormValues={initiaFormValues} onSubmit={onSubmit} />
      </ModalWindow>
    </>
  );
};

export default AddProductModal;
