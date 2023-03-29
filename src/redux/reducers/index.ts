import products from './products';
import settings from './settings';

import { combineReducers } from 'redux';

import { StateModel as ProductsStateModel } from './products';
import { StateModel as SettingsStateModel } from './settings';

export interface StateModel {
  products: ProductsStateModel;
  settings: SettingsStateModel;
}

export const root = combineReducers({
  products,
  settings,
});
