import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {IGuess} from '@/models/home';

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
      <TouchableOpacity style={styles.item} onPress={this.handleClick}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {guess} = this.props;
    console.log(guess, 99991);
    return (
      <View style={styles.container}>
        <Text>猜你喜欢</Text>
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
    height: 300,
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
});

export default connector(Guess);
