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

let IconIconBofang1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M458.6 336.4l223.1 130.9c23.4 13.7 30.1 42 14.8 63.1-3.4 4.8-7.9 8.9-13 12.2l-223.1 143c-22.8 14.6-54.4 9.9-70.7-10.7-6-7.5-9.4-16.8-9.4-26.5V374.6c0-25.2 22.7-45.6 50.7-45.6 9.7 0 19.4 2.6 27.6 7.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconBofang1.defaultProps = {
  size: 18,
};

IconIconBofang1 = React.memo ? React.memo(IconIconBofang1) : IconIconBofang1;

export default IconIconBofang1;
