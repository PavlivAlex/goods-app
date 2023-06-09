import * as Yup from 'yup';

export const AddProductValidationSchema = Yup.object().shape({
  title: Yup.string()
    .test('len', 'Title must be at least 3 characters', name => (name || '').toString().length >= 3)
    .required('Title is required!'),
  brand: Yup.string()
    .test('len', 'Brand must be at least 3 characters', name => (name || '').toString().length >= 3)
    .required('Brand is required!'),
  year: Yup.string().required('Year is required!'),
  rating: Yup.number().required('Rating is required!'),
  price: Yup.number().required('Price is required!'),
  stock: Yup.number().required('Price is required!'),
  description: Yup.string()
    .test('len', 'Description must be at least 10 characters', name => (name || '').toString().length >= 10)
    .required('Description is required!'),
  category: Yup.string().required('Category is required!'),
});
