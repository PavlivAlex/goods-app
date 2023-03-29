import React from 'react';

// helpers
import { FormikHelpers } from 'formik';

// components
import ModalWindow from '../../Antd/ModalWindow';
import AddProductForm, { FormValuesModel } from '../../Forms/TemplateForms/Products';

interface AddProductModalProps {
  isModalVisible: boolean;
  initiaFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel, helpers?: FormikHelpers<FormValuesModel>) => Promise<void>;
  closeCallback: (isVisible: boolean) => void;
}

const AddProductModal = ({ isModalVisible, initiaFormValues, onSubmit, closeCallback }: AddProductModalProps) => {
  return (
    <ModalWindow title='Creating product' isVisible={isModalVisible} closeCallback={closeCallback}>
      <AddProductForm initialFormValues={initiaFormValues} onSubmit={(values, helpers) => onSubmit(values, helpers)} />
    </ModalWindow>
  );
};

export default AddProductModal;
