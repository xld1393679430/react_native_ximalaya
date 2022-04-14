import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import {StyleSheet} from 'react-native';
import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper';
import {RootState} from '../models';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '@/models/category';

type HomeParamList = {
  [key: string]: undefined;
};

const Tab = createMaterialTopTabNavigator<HomeParamList>();

const mapStateToProps = ({category}: RootState) => {
  return {
    myCategorys: category.myCategorys,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

class HomeTabs extends React.Component<IProps> {
  renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };

  renderScreen = (item: ICategory) => {
    return (
      <Tab.Screen
        key={item.id}
        name={item.id}
        component={Home}
        options={{
          tabBarLabel: item.name,
        }}
      />
    );
  };

  render() {
    const {myCategorys} = this.props;
    return (
      <Tab.Navigator
        tabBar={this.renderTabBar}
        sceneContainerStyle={styles.sceneContainer}
        screenOptions={{
          lazy: true,
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: 80,
          },
          tabBarIndicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#f86442',
          },
          tabBarInactiveTintColor: '#333',
          tabBarActiveTintColor: '#f86442',
        }}>
        {myCategorys.map(this.renderScreen)}
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default connector(HomeTabs);
