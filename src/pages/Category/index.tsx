import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '@/models/category';
import {viewportWidth} from '@/utils/index';

const mapStateToProps = ({category}: RootState) => {
  return {
    myCategorys: category.myCategorys,
    categorys: category.categorys,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

interface IState {
  myCategorys: ICategory[];
}

const parentWidth = viewportWidth - 10;
const itemWidth = parentWidth / 4;

class Category extends React.Component<IProps, IState> {
  state = {
    myCategorys: this.props.myCategorys,
  };

  renderItem = (item: ICategory, index: number) => {
    return (
      <View key={item.id} style={styles.itemWrapper}>
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  };

  render() {
    const {categorys} = this.props;
    const {myCategorys} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.classifyName}>我的分类</Text>
        <View style={styles.classifyView}>
          {myCategorys.map(this.renderItem)}
        </View>

        <View>
          <Text style={styles.classifyName}>所有分类</Text>
          <View style={styles.classifyView}>
            {categorys.map(this.renderItem)}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  classifyName: {
    fontSize: 16,
    marginTop: 14,
    marginLeft: 10,
    marginBottom: 8,
  },
  classifyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
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

export default connector(Category);
