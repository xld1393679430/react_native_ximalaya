import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Alert} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {IGuess} from '@/models/home';
import Touchable from '@/components/Touchable';
import IconFont from '@/assets/iconfont';

const mapStateToProps = ({home}: RootState) => ({
  guess: home.guess,
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class Guess extends React.Component<ModelState> {
  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchGuess',
    });
  };

  handleClick = () => {
    Alert.alert('111');
  };

  renderItem = ({item}: {item: IGuess}) => {
    return (
      <Touchable style={styles.item} onPress={this.handleClick}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </Touchable>
    );
  };

  render() {
    const {guess} = this.props;
    console.log(guess, 999991);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <IconFont name="icon-xihuan" />
            <Text style={styles.headerTitle}>猜你喜欢</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.moreText}>更多</Text>
            <IconFont name="icon-gengduo" />
          </View>
        </View>
        <FlatList
          style={{flexGrow: 0}}
          numColumns={3}
          data={guess}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 5,
    color: '#333',
  },
  moreText: {
    marginRight: 5,
    color: '#6f6f6f',
  },
});

export default connector(Guess);
