import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {viewportWidth} from '@/utils/index';
import {ICategory} from '@/models/category';

const parentWidth = viewportWidth - 10;
const itemWidth = parentWidth / 4;

interface Iprops {
  item: ICategory;
}

class Item extends React.Component<Iprops> {
  render() {
    const {item} = this.props;
    return (
      <View key={item.id} style={styles.itemWrapper}>
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    width: itemWidth,
    height: 48,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default Item;
