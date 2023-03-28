import React from 'react';

// components
import Form from '../../Form/index';
import InnerForm from './InnerForm';
import { AddProductValidationSchema } from '../../../../validation/products';

export interface FormValuesModel {
  title: string;
  category: string;
  description: string;
}

interface IProps {
  initialFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel) => void;
}

const AddProductForm = ({ initialFormValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText='Create'
      renderForm={<InnerForm />}
      initialValues={initialFormValues}
      validationSchema={AddProductValidationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default AddProductForm;
