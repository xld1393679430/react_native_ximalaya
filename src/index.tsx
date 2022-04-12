import React from 'react';
import Navigator from '@/navigator/index';
import {Provider} from 'react-redux';
import store from '@/config/dva';
import {StatusBar} from 'react-native';
export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
        {/* 设置状态栏样式 --start-- */}
        <StatusBar
          backgroundColor={'transpart'}
          barStyle="dark-content"
          translucent
        />
        {/* 设置状态栏样式 --end-- */}
      </Provider>
    );
  }
}
