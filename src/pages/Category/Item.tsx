import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {viewportWidth} from '@/utils/index';
import {ICategory} from '@/models/category';

const parentWidth = viewportWidth - 10;
const itemWidth = parentWidth / 4;

interface Iprops {
  item: ICategory;
  isEdit: boolean;
  selected: boolean;
  disabled?: boolean;
}

class Item extends React.Component<Iprops> {
  render() {
    const {item, isEdit, selected, disabled} = this.props;
    return (
      <View key={item.id} style={styles.itemWrapper}>
        <View style={[styles.item, disabled && styles.disabled]}>
          <Text>{item.name}</Text>
          {isEdit && !disabled && (
            <View style={styles.icon}>
              <Text style={styles.iconText}>{selected ? '-' : '+'}</Text>
            </View>
          )}
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
  icon: {
    position: 'absolute',
    right: -5,
    top: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f86442',
  },
  iconText: {
    color: '#fff',
    lineHeight: 16,
    fontSize: 16,
  },
  disabled: {
    backgroundColor: '#eee',
  },
});

export default Item;
