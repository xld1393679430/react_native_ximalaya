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

let IconBofang1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C229.7 0 0 229.7 0 512s229.7 512 512 512 512-229.7 512-512S794.3 0 512 0z m0 979.5C254.2 979.5 44.5 769.8 44.5 512S254.2 44.5 512 44.5 979.5 254.2 979.5 512 769.8 979.5 512 979.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M800 454.2L418.5 233.9c-20.9-12.1-45.9-12.1-66.8 0s-33.4 33.7-33.4 57.8v440.5c0 24.1 12.5 45.8 33.4 57.8 10.5 6 21.9 9.1 33.4 9.1s22.9-3 33.4-9.1L800 569.8c20.9-12.1 33.4-33.7 33.4-57.8 0-24.1-12.5-45.8-33.4-57.8z m-22.3 77.1L396.2 751.5c-10 5.8-18.9 1.9-22.3 0-3.3-1.9-11.1-7.7-11.1-19.3V291.8c0-11.6 7.8-17.3 11.1-19.3 2-1.2 6.1-3.1 11.2-3.1 3.3 0 7.1 0.8 11 3.1l381.5 220.2c10 5.8 11.1 15.4 11.1 19.3 0.2 3.9-0.9 13.5-11 19.3z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBofang1.defaultProps = {
  size: 18,
};

IconBofang1 = React.memo ? React.memo(IconBofang1) : IconBofang1;

export default IconBofang1;
