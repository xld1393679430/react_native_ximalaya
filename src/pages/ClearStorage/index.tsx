import storage from '@/config/storage';
import React from 'react';
import {Alert, Button} from 'react-native';
import {app} from '@/config/dva';
import models from '@/models/index';

class ClearStorage extends React.Component {
  handleClearStorage = () => {
    // 清除缓存 首先清除dva数据
    // TODO 暂时没解决清除dva数据的方法

    // 清除缓存 然后清除storage
    storage
      .clearMap()
      .then(() => {
        Alert.alert('缓存清除成功');
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  render() {
    return <Button title="清理缓存" onPress={this.handleClearStorage} />;
  }
}

export default ClearStorage;
