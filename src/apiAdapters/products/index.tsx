import { ICategory } from '../../interfaces/products';

export const productsAdapter = {
  getCategories: (categories: string[]) => {
    return categories.map((category, index) => ({ label: category, key: index } as ICategory));
  },
};
