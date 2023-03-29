import { ActionType } from '../actions/products';
import { IReduxAction } from '../../interfaces/redux';
import { ICategory, IProduct } from '../../interfaces/products';

export interface StateModel {
  product: IProduct | null;
  products: IProduct[] | [];
  categories: ICategory[] | [];
  productsByCategory: IProduct[] | [];
  isUpdated: any;
}

const initialState: StateModel = {
  product: null,
  products: [],
  categories: [],
  productsByCategory: [],
  isUpdated: {},
};

const products = (state: StateModel = initialState, action: IReduxAction) => {
  const { payload, type } = action;

  switch (type) {
    case ActionType.SET_PRODUCT: {
      return { ...state, product: payload };
    }
    case ActionType.SET_PRODUCTS: {
      return { ...state, products: payload, isUpdated: {} };
    }
    case ActionType.SET_CATEGORIES: {
      return { ...state, categories: payload };
    }
    case ActionType.SET_PRODUCTS_BY_CATEGORY: {
      return { ...state, productsByCategory: payload };
    }
    default:
      return state;
  }
};

export default products;
