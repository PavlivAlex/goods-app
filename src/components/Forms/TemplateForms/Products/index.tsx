import React from 'react';

// helpers
import { FormikHelpers } from 'formik';
import { AddProductValidationSchema } from '../../../../validation/products';

// components
import Form from '../../Form/index';
import InnerForm from './InnerForm';

export interface FormValuesModel {
  title: string;
  category: string;
  description: string;
  brand: string;
  year: string;
  rating: number;
  price: number | null;
  stock: number | null;
}

interface IProps {
  initialFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel, helpers?: FormikHelpers<FormValuesModel>) => Promise<void>;
}

const AddProductForm = ({ initialFormValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText='Create'
      renderForm={<InnerForm />}
      initialValues={initialFormValues}
      validationSchema={AddProductValidationSchema}
      onSubmit={(values: FormValuesModel, helpers: FormikHelpers<FormValuesModel>) => onSubmit(values, helpers)}
    />
  );
};

export default AddProductForm;
