import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {RootStackNavigation, RootStackParamList} from '.';
import {RouteProp, TabNavigationState} from '@react-navigation/native';
import IconFont from '@/assets/iconfont/index';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tabs = createBottomTabNavigator();

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeadertitle(route: Route) {
  const name = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  switch (name) {
    case 'Home':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '我的';
    default:
      return '首页';
  }
}

class BottomTabs extends React.Component<IProps> {
  render() {
    return (
      <Tabs.Navigator
        screenOptions={() => ({
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: '首页',
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-shouye1" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Listen"
          component={Listen}
          options={{
            headerTitle: '我听',
            tabBarLabel: '我听',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-erji" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Found"
          component={Found}
          options={{
            headerTitle: '发现',
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-faxiantianchong" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Account"
          component={Account}
          options={{
            headerTitle: '我的',
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-wodexiao" size={size} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }
}

export default BottomTabs;
