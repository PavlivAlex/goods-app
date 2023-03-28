// helpers
import { IRoute } from '../../interfaces/router';

// components
import HomePage from '../../pages/HomePage/HomePage';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';

export enum RoutesEnum {
  Home = '/',
  Category = '/category',
}

export const routes: IRoute[] = [
  {
    path: RoutesEnum.Home,
    title: 'Home',
    component: HomePage,
  },
  {
    path: `${RoutesEnum.Category}/:name`,
    title: 'Category',
    component: CategoryPage,
  },
];
