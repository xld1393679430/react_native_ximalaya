import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import Carousel from './Carousel';
import Guess from './Guess';
import {IChannel} from '@/models/home';
import ChannelItem from './ChannelItem';

const mapStateToProps = ({home, loading}: RootState) => ({
  carousels: home.carousels,
  channels: home.channels,
  loading: loading.effects['home/fetchChannels'],
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

interface IState {
  refreshing: boolean;
}

class Home extends React.Component<IProps, IState> {
  state = {
    refreshing: false,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchCarousel',
    });

    dispatch({
      type: 'home/fetchChannels',
    });
  };

  handleNavigation = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {id: 100});
  };

  handleChannelItemPress = (data: IChannel) => {
    console.log(data, 'data---');
  };

  keyExtractor = (item: IChannel, index: number) => {
    return `${item.id}-${index}`;
  };

  handleEndReached = () => {
    const {dispatch, loading} = this.props;

    if (loading) {
      return;
    }
    dispatch({
      type: 'home/fetchChannels',
      payload: {
        loadMore: true,
      },
    });
  };

  handleRefresh = () => {
    this.setState({
      refreshing: true,
    });

    const {dispatch} = this.props;

    dispatch({
      type: 'home/fetchChannels',
      callback: () => {
        this.setState({
          refreshing: false,
        });
      },
    });
  };

  renderItem = ({item}: {item: IChannel}) => {
    return <ChannelItem data={item} onPress={this.handleChannelItemPress} />;
  };

  get header() {
    const {carousels} = this.props;
    return (
      <View>
        <Carousel data={carousels} />
        <Guess />
      </View>
    );
  }

  get footer() {
    const {loading, channels} = this.props;
    if (loading && channels.length > 0) {
      return (
        <View style={styles.loading}>
          <Text>正在加载中...</Text>
        </View>
      );
    }
  }

  get empty() {
    const {loading} = this.props;
    if (loading) {
      return;
    }
    return (
      <View style={styles.empty}>
        <Text>暂无数据</Text>
      </View>
    );
  }
  render() {
    const {channels} = this.props;
    const {refreshing} = this.state;
    return (
      <FlatList
        ListHeaderComponent={this.header}
        ListFooterComponent={this.footer}
        ListEmptyComponent={this.empty}
        data={channels}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={0.2}
        onRefresh={this.handleRefresh}
        refreshing={refreshing}
      />
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 100,
  },
});

export default connector(Home);
