import axios from 'axios';
import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import CarouselsMockJson from '@/mock/carousels';

// 轮播图
const CAROUSEL_URL = '/mock/11/bear/carousel';

// 猜你喜欢
const GUESS_URL = '/mock/11/bear/guess';

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface IGuess {
  id: string;
  title: string;
  image: string;
}
export interface HomeState {
  carousels: ICarousel[];
  guess: IGuess[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousel: Effect;
    fetchGuess: Effect;
  };
}

const initialState = {
  carousels: [],
  guess: [],
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
    *fetchGuess(_, {call, put}) {
      const {data} = yield call(axios.get, GUESS_URL);
      console.log(data, 7777);
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
  },
};

export default homeModel;
