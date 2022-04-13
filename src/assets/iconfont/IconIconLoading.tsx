/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconIconLoading: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 96a32 32 0 0 1 64 0v192a32 32 0 0 1-64 0V96z m250.624 60.64a32 32 0 1 1 51.776 37.632l-112.832 155.328a32 32 0 0 1-51.808-37.632l112.864-155.328z m167.136 196.384a32 32 0 1 1 19.776 60.864l-182.624 59.328a32 32 0 0 1-19.776-60.864l182.624-59.328z m19.776 257.088a32 32 0 1 1-19.776 60.864l-182.624-59.328a32 32 0 0 1 19.776-60.864l182.624 59.328zM782.4 829.76a32 32 0 0 1-51.776 37.632l-112.864-155.328a32 32 0 1 1 51.808-37.632l112.832 155.328zM544 928a32 32 0 0 1-64 0v-192a32 32 0 0 1 64 0v192z m-250.624-60.64a32 32 0 0 1-51.776-37.632l112.832-155.328a32 32 0 0 1 51.808 37.632l-112.864 155.328z m-167.136-196.384a32 32 0 1 1-19.776-60.864l182.624-59.328a32 32 0 0 1 19.776 60.864l-182.624 59.328z m-19.776-257.088a32 32 0 0 1 19.776-60.864l182.624 59.328a32 32 0 1 1-19.776 60.864l-182.624-59.328zM241.6 194.24a32 32 0 1 1 51.776-37.632l112.864 155.328a32 32 0 1 1-51.808 37.632L241.6 194.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconLoading.defaultProps = {
  size: 18,
};

IconIconLoading = React.memo ? React.memo(IconIconLoading) : IconIconLoading;

export default IconIconLoading;
