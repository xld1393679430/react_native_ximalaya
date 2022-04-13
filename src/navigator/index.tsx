import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import Category from '@/pages/Category';

export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Detail: {
    id: number;
  };
  Category: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

let Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: '上一页',
            headerTitleAlign: 'center',
            // 统一安卓 ios页面切换效果 strt
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            // 统一安卓 ios页面切换效果 end

            // 统一安卓 ios页面手势 strt
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            // 统一安卓 ios页面手势 end

            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerTitle: '详情页'}}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{headerTitle: '分类'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
