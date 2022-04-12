import React from 'react';
import {Text, View, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';

const mapStateToProps = ({home, loading}: RootState) => ({
  num: home.num,
  loading: loading.effects['home/asyncAdd'],
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  handleNavigation = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {id: 100});
  };

  handleAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 10,
      },
    });
  };

  handleAsyncAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 10,
      },
    });
  };

  render() {
    const {num, loading} = this.props;
    console.log(this.props, 555);
    return (
      <View>
        <Text>Home12---{num}</Text>
        <Text>{loading ? '正努力加载中' : ''}</Text>
        <Button title="加1" onPress={this.handleAdd} />
        <Button title="异步加1" onPress={this.handleAsyncAdd} />
        <Button title="跳转到详情页面" onPress={this.handleNavigation} />
      </View>
    );
  }
}

export default connector(Home);
