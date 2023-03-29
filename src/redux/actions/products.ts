import { productsAPI } from '../../api/products';
import { FormValuesModel } from '../../components/Forms/TemplateForms/Products';
import { ICategory, IProduct } from '../../interfaces/products';

export enum ActionType {
  SET_PRODUCT = 'products/SET_PRODUCT',
  SET_PRODUCTS = 'products/SET_PRODUCTS',
  SET_CATEGORIES = 'products/SET_CATEGORIES',
  SET_PRODUCTS_BY_CATEGORY = 'products/SET_PRODUCTS_BY_CATEGORY',
}

export const products = {
  setProduct: (product: IProduct) => ({
    type: ActionType.SET_PRODUCT,
    payload: product,
  }),
  setProducts: (products: IProduct[]) => ({
    type: ActionType.SET_PRODUCTS,
    payload: products,
  }),
  setCategories: (categories: ICategory[]) => ({
    type: ActionType.SET_CATEGORIES,
    payload: categories,
  }),
  setProductsByCategory: (products: IProduct[]) => ({
    type: ActionType.SET_PRODUCTS_BY_CATEGORY,
    payload: products,
  }),

  getCurrentProduct: (id: string) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;

    const findedPropuct = productsFromStore.find((product: IProduct) => product.id === Number(id));

    dispatch(products.setProduct(findedPropuct));
  },

  getAllProducts: (search?: string) => async (dispatch: any) => {
    const response = await productsAPI.getAllProducts(search);
    if (response) {
      dispatch(products.setProducts(response.products));
      return response;
    }
  },
  getCategories: () => async (dispatch: any) => {
    const response = await productsAPI.getCategories();
    if (response) {
      dispatch(products.setCategories(response));
      return response;
    }
  },
  getProductsByCategory: (category: string) => async (dispatch: any) => {
    const response = await productsAPI.getProductsByCategoty(category);

    if (response) {
      dispatch(products.setProductsByCategory(response.products));
      return response;
    }
  },
  createProduct: (productToCreate: FormValuesModel) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;

    const response = await productsAPI.createProduct(productToCreate);

    if (response) {
      dispatch(products.setProducts([...productsFromStore, response]));
      return response;
    }
  },
  deleteProduct: (productId: number) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;

    const response = await productsAPI.deleteProduct(productId);

    if (response) {
      const updatedProducts = productsFromStore.filter((product: IProduct) => product.id !== response.id);
      dispatch(products.setProducts(updatedProducts));
      return response;
    }
  },
};
