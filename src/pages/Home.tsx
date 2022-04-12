import React from 'react';
import {Text, View, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  handleNavigation = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {id: 100});
  };

  render() {
    return (
      <View>
        <Text>Home1</Text>
        <Button title="跳转到详情页面" onPress={this.handleNavigation} />
      </View>
    );
  }
}

export default Home;
