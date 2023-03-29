import { IProduct } from '../../interfaces/products';
import { apiConfig } from '../../config/apiConfig';
import { APIService } from '../axiosInstance';
import { productsAdapter } from '../../apiAdapters/products';

const mainPath = 'products';

export const productsAPI = {
  getCurrentProduct: (id: string) => {
    return APIService.get<IProduct>(`${apiConfig}product/${id}`).then(({ data }) => data);
  },
  getAllProducts: (search?: string) => {
    return APIService.get(`${apiConfig}${mainPath}${search ? `/search` : ''}`, { params: { q: search, limit: 1000 } }).then(
      ({ data }) => data,
    );
  },
  getCategories: () => {
    return APIService.get<string[]>(`${apiConfig}${mainPath}/categories`).then(({ data }) => productsAdapter.getCategories(data));
  },
  getProductsByCategoty: (category: string) => {
    return APIService.get(`${apiConfig}${mainPath}/category/${category}`).then(({ data }) => data);
  },
  createProduct: (product: any) => {
    return APIService.post(`${apiConfig}${mainPath}/add`, product).then(({ data }) => data);
  },
  deleteProduct: (productId: number) => {
    return APIService.delete(`${apiConfig}${mainPath}/${productId}`).then(({ data }) => data);
  },
};
