import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';

export interface HomeState {
  num: number;
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    add: Reducer<HomeState>;
  };
  effects: {
    asyncAdd: Effect;
  };
}

function delay(time: number = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

const initialState = {
  num: 1,
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    add(state = initialState, {payload}) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
  effects: {
    *asyncAdd({payload}, {call, put}) {
      yield call(delay, 2000);
      yield put({
        type: 'add',
        payload,
      });
    },
  },
};

export default homeModel;
