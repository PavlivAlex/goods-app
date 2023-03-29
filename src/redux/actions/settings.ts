import { products } from './products';
import { ISorting } from '../reducers/settings';
import { sortByNumber, sortByString } from '../../helpers/sotring';

export enum ActionType {
  SET_FILTERS = 'settings/SET_FILTERS',
  SET_SORTING = 'settings/SET_SORTING',
}

export const settings = {
  setFilters: (filters: any) => ({
    type: ActionType.SET_FILTERS,
    payload: filters,
  }),
  setSorting: (sorting: any) => ({
    type: ActionType.SET_SORTING,
    payload: sorting,
  }),
  handleFilter: (filterOptions: string) => async (dispatch: any, getState: any) => {
    const { products: productsFromStore } = getState().products;

    let filteredProducts = productsFromStore;
    switch (filterOptions) {
      case 'top-sale':
        {
          filteredProducts = productsFromStore.filter((product: any) => product.rating >= 4.5);
        }
        break;
      case 'high-price':
        {
          filteredProducts = productsFromStore.filter((product: any) => product.price >= 1000);
        }
        break;
      case 'low-price':
        {
          filteredProducts = productsFromStore.filter((product: any) => product.price <= 200);
        }
        break;
      case 'high-discount':
        {
          filteredProducts = productsFromStore.filter((product: any) => product.discountPercentage >= 10);
        }
        break;
    }

    if (filterOptions) {
      dispatch(products.setProducts(filteredProducts));
    } else {
      dispatch(products.getAllProducts());
    }
    return true;
  },
  handleSorting:
    ({ option, type }: ISorting) =>
    (dispatch: any, getState: any) => {
      const { products: productsFromStore } = getState().products;
      const { sorting } = getState().settings;

      const sortType = type || sorting.type;
      const sortOption = option || sorting.option;

      dispatch(settings.setSorting({ option: sortOption, type: sortType }));

      const sortedProducts = productsFromStore.sort((a: any, b: any) => {
        if (typeof a[sortOption] === 'number' && typeof b[sortOption] === 'number') {
          return sortByNumber(a[sortOption], b[sortOption], sortType);
        } else if (typeof a[sortOption] === 'string' && typeof b[sortOption] === 'string') {
          return sortByString(a[sortOption], b[sortOption], sortType);
        }
      });
      dispatch(products.setProducts(sortedProducts));

      return true;
    },
};
