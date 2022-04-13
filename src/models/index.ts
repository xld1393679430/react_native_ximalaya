import {DvaLoadingState} from 'dva-loading-ts';
import home, {HomeState} from './home';
import category from './category';

const models = [home, category];

export type RootState = {
  home: HomeState;
  category: typeof category.state;
  loading: DvaLoadingState;
};

export default models;
