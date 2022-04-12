import axios from 'axios';
import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import CarouselsMockJson from '@/mock/carousels';

const CAROUSEL_URL = '/mock/11/bear/carousel';

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}
export interface HomeState {
  carousels: ICarousel[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousel: Effect;
  };
}

const initialState = {
  carousels: [],
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state = initialState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchCarousel(_, {call, put}) {
      // const {data} = yield call(axios.get, CAROUSEL_URL);
      const data = CarouselsMockJson;
      yield put({
        type: 'setState',
        payload: {
          carousels: data,
        },
      });
    },
  },
};

export default homeModel;
