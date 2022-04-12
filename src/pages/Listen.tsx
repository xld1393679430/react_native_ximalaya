import React from 'react';
import {Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

class Listen extends React.Component<IProps> {
  handleNavigation = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {id: 100});
  };

  render() {
    return (
      <View>
        <Text>Listen</Text>
      </View>
    );
  }
}

export default Listen;
