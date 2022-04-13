import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
import {IChannel} from '@/models/home';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface IProps {
  data: IChannel;
  onPress: (data: IChannel) => void;
}

class ChannelItem extends React.Component<IProps> {
  handlePress = () => {
    const {onPress, data} = this.props;
    onPress && onPress(data);
  };
  render() {
    const {data} = this.props;
    return (
      <Touchable style={styles.container} onPress={this.handlePress}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {data.title}
          </Text>
          <Text style={styles.remark} numberOfLines={2}>
            {data.remark}
          </Text>
          <View style={styles.bottom}>
            <View style={styles.playedView}>
              <IconFont name="icon-erji" size={14} />
              <Text style={styles.number}>{data.played}</Text>
            </View>
            <View style={styles.playingView}>
              <IconFont name="icon-icon_bofang" size={14} />
              <Text style={styles.number}>{data.playing}</Text>
            </View>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    // IOS 阴影效果 --- start ---
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // IOS 阴影效果 --- end ---

    // 安卓 没有阴影效果 只能设置投影 --- start ---
    elevation: 2,
    // 安卓 没有阴影效果 只能设置投影 --- end ---
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#dedede',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  remark: {
    fontSize: 14,
    marginBottom: 5,
    backgroundColor: '#f8f8f8',
    padding: 4,
  },
  bottom: {
    flexDirection: 'row',
  },
  playedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  playingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginLeft: 5,
  },
});

export default ChannelItem;
