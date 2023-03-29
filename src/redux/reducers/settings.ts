import { ActionType } from '../actions/settings';
import { IReduxAction } from '../../interfaces/redux';

export interface ISorting {
  type?: string | null;
  option?: string | null;
}

export interface StateModel {
  sorting: ISorting;
  filters: string[];
}
const initialState: StateModel = {
  sorting: { type: 'asc', option: '' },
  filters: [''],
};

const settings = (state: StateModel = initialState, action: IReduxAction) => {
  const { payload, type } = action;

  switch (type) {
    case ActionType.SET_FILTERS: {
      return { ...state, filters: payload };
    }
    case ActionType.SET_SORTING: {
      return { ...state, sorting: payload };
    }
    default:
      return state;
  }
};

export default settings;
