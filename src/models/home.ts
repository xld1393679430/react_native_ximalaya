import axios from 'axios';
import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import CarouselsMockJson from '@/mock/carousels';
import GuessMockJson from '@/mock/guess';
import ChannelsMockJson from '@/mock/channels';
import {randomArray} from '@/utils/index';
import {RootState} from '.';
// 轮播图
const CAROUSEL_URL = '/mock/11/bear/carousel';

// 猜你喜欢
const GUESS_URL = '/mock/11/bear/guess';

// 频道列表
const CHANNEL_URL = '/mock/11/bear/channel';

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

export interface IChannel {
  id: string;
  title: string;
  image: string;
  remark: string;
  played: number;
  playing: number;
}

export interface IPagination {
  current: number;
  total: number;
  hasMore: boolean;
}

export interface HomeState {
  carousels: ICarousel[];
  guess: IGuess[];
  channels: IChannel[];
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
    fetchChannels: Effect;
  };
}

const initialState = {
  carousels: [],
  guess: [],
  channels: [],
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
      const data = randomArray(CarouselsMockJson);
      yield put({
        type: 'setState',
        payload: {
          carousels: data,
        },
      });
    },
    *fetchGuess(_, {call, put}) {
      // const {data} = yield call(axios.get, GUESS_URL);
      const data = randomArray(GuessMockJson);
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
    *fetchChannels({callback, payload}, {call, put, select}) {
      const {channels} = yield select((state: RootState) => state.home);

      // let {data} = yield call(axios.get, CHANNEL_URL);
      // data = data.results;

      const data = randomArray(ChannelsMockJson);

      let newChannels = data;
      if (payload && payload.loadMore) {
        newChannels = channels.concat(data);
      }
      yield put({
        type: 'setState',
        payload: {
          channels: newChannels,
        },
      });
      if (typeof callback === 'function') {
        callback();
      }
    },
  },
};

export default homeModel;
