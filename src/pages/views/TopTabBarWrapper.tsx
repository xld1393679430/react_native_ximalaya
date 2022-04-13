import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Touchable from '@/components/Touchable';
import LinearGradient from 'react-native-linear-gradient';

interface IProps extends MaterialTopTabBarProps {}

class TopTabBarWrapper extends React.Component<IProps> {
  handleToCategory = () => {
    const {navigation} = this.props;
    navigation.navigate('Category');
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <LinearGradient colors={['#ccc', '#e2e2e2']} style={styles.gradient} /> */}
        <View style={styles.topBarView}>
          <View style={styles.tabBar}>
            <MaterialTopTabBar {...this.props} />
          </View>
          <Touchable style={styles.categary} onPress={this.handleToCategory}>
            <Text>分类</Text>
          </Touchable>
        </View>

        <View style={styles.bottom}>
          <Touchable style={styles.search}>
            <Text>搜索</Text>
          </Touchable>
          <Touchable style={styles.history}>
            <Text>历史记录</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(),
  },
  topBarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBar: {
    overflow: 'hidden',
    elevation: 0,
    flex: 1,
    backgroundColor: 'transparent',
  },
  categary: {
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  search: {
    flex: 1,
    paddingLeft: 12,
    height: 30,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  history: {
    marginLeft: 20,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 260,
  },
});

export default TopTabBarWrapper;
