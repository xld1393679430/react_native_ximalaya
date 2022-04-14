import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import _ from 'lodash';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import {DragSortableView} from 'react-native-drag-sort';
import {ICategory} from '@/models/category';
import Item, {itemHeight, itemWidth, parentWidth} from './Item';
import {RootStackNavigation} from '@/navigator/index';
import HeaderRightBtn from './HeaderRightBtn';
import Touchable from '@/components/Touchable';

const fixedItems = [0, 1];

const mapStateToProps = ({category}: RootState) => {
  return {
    myCategorys: category.myCategorys,
    categorys: category.categorys,
    isEdit: category.isEdit,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

interface IState {
  myCategorys: ICategory[];
}

class Category extends React.Component<IProps, IState> {
  state = {
    myCategorys: this.props.myCategorys,
  };

  constructor(props: IProps) {
    super(props);
    props.navigation.setOptions({
      headerRight: () => <HeaderRightBtn onSubmit={this.handleSubmit} />,
    });
  }

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/setState',
      payload: {
        isEdit: false,
      },
    });
  }

  handleSubmit = () => {
    const {dispatch, navigation, isEdit} = this.props;
    const {myCategorys} = this.state;
    dispatch({
      type: 'category/toggle',
      payload: {
        myCategorys,
      },
    });
    if (isEdit) {
      navigation.goBack();
    }
  };

  handlePress = (item: ICategory, index: number, selected: boolean) => {
    const {isEdit} = this.props;
    const {myCategorys} = this.state;
    const disabled = fixedItems.includes(index);

    if (disabled && selected) {
      return;
    }
    if (isEdit) {
      if (selected) {
        this.setState({
          myCategorys: myCategorys.filter(i => i.id !== item.id),
        });
      } else {
        this.setState({
          myCategorys: myCategorys.concat([item]),
        });
      }
    }
  };

  handleLongPress = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/setState',
      payload: {
        isEdit: true,
      },
    });
  };

  handleDataChange = (data: ICategory[]) => {
    this.setState({
      myCategorys: data,
    });
  };

  handleClickItem = (data: ICategory[], item: ICategory) => {
    const index = data.indexOf(item);
    this.handlePress(item, index, true);
  };

  renderItem = (item: ICategory, index: number) => {
    const {isEdit} = this.props;
    const disabled = fixedItems.includes(index);
    return (
      <Item
        key={item.id}
        item={item}
        isEdit={isEdit}
        selected={true}
        disabled={disabled}
      />
    );
  };

  renderUnSelectedItem = (item: ICategory, index: number) => {
    const {isEdit} = this.props;
    return (
      <Touchable
        key={item.id}
        onPress={() => this.handlePress(item, index, false)}
        onLongPress={this.handleLongPress}>
        <Item item={item} isEdit={isEdit} selected={false} />
      </Touchable>
    );
  };

  render() {
    const {categorys, isEdit} = this.props;
    const {myCategorys} = this.state;

    const classifyGroup = _.groupBy(categorys, item => item.classify);
    return (
      <ScrollView style={styles.container} scrollEnabled={false}>
        <Text style={styles.classifyName}>我的分类</Text>
        <View style={styles.classifyView}>
          <DragSortableView
            dataSource={myCategorys}
            fixedItems={fixedItems}
            renderItem={this.renderItem}
            sortable={isEdit}
            keyExtractor={item => item.id}
            onDataChange={this.handleDataChange}
            parentWidth={parentWidth}
            childrenWidth={itemWidth}
            childrenHeight={itemHeight}
            marginChildrenTop={5}
            onClickItem={this.handleClickItem}
          />
        </View>

        <View>
          {Object.keys(classifyGroup).map(classify => {
            return (
              <View key={classify}>
                <Text style={styles.classifyName}>{classify}</Text>
                <View style={styles.classifyView}>
                  {classifyGroup[classify].map((item, index) => {
                    if (myCategorys.find(i => i.id === item.id)) {
                      return null;
                    }
                    return this.renderUnSelectedItem(item, index);
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
});

export default connector(Category);
