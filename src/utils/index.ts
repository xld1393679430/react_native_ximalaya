import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

// 根据百分比获取宽度
function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

// 根据百分比获取高度
function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

// 数据随机重新排序
function randomArray(array: Array<any>) {
  const _arrray = [...array];
  return _arrray.sort(() => Math.random() - 0.5);
}

export {viewportWidth, viewportHeight, wp, hp, randomArray};
