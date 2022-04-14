import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import _ from 'lodash';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '@/models/category';
import Item from './Item';
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
    const {dispatch} = this.props;
    const {myCategorys} = this.state;
    dispatch({
      type: 'category/toggle',
      payload: {
        myCategorys,
      },
    });
  };

  handlePress = (item: ICategory, index: number, selected: boolean) => {
    const {isEdit} = this.props;
    const {myCategorys} = this.state;
    const disabled = fixedItems.includes(index);
    if (disabled) {
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

  renderItem = (item: ICategory, index: number) => {
    const {isEdit} = this.props;
    const disabled = fixedItems.includes(index);
    return (
      <Touchable
        key={item.id}
        onPress={() => this.handlePress(item, index, true)}
        onLongPress={this.handleLongPress}>
        <Item
          key={item.id}
          item={item}
          isEdit={isEdit}
          selected={true}
          disabled={disabled}
        />
      </Touchable>
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
    const {categorys} = this.props;
    const {myCategorys} = this.state;

    const classifyGroup = _.groupBy(categorys, item => item.classify);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.classifyName}>我的分类</Text>
        <View style={styles.classifyView}>
          {myCategorys.map(this.renderItem)}
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
