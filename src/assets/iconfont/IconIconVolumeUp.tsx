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

let IconIconVolumeUp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M799.4 859.3c-7.3 0-14.5-2.8-19.8-8.4-10.5-11-10.6-28.1 0.5-38.6l0.9-0.9c80.2-80.8 123.5-186.3 123-298.4s-44.5-217.3-124.1-296.2c-10.8-10.7-12.3-29.4-1.7-40.2 10.5-10.9 26.6-12.5 37.5-2l3.5 3.3c89.7 89 139.6 208 140.1 334.9 0.5 126.8-48.4 246.3-137.8 336.3-0.2 0.2-2.2 2.2-2.4 2.3-5.5 5.2-12.6 7.9-19.7 7.9zM645.3 657.7c-6.8 0-13.5-2.5-18.9-7.4-11.2-10.4-11.8-27.9-1.4-39.1 26.8-28.8 41.3-67.2 40.8-108.2-0.5-40.9-15.9-78.9-43.4-106.8-10.7-10.9-10.6-28.4 0.3-39.1 10.9-10.7 28.4-10.6 39.1 0.3 37.6 38.2 58.7 89.7 59.4 144.9s-19.1 107.3-55.7 146.6c-5.4 5.9-12.8 8.8-20.2 8.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M728.7 743.4c-6.6 0-13.2-2.3-18.4-7-11.4-10.2-12.4-27.7-2.2-39 46.5-52 71.6-120.7 70.7-193.5-0.9-72.7-27.7-140.7-75.5-191.3l-2.3-2.3c-10.5-11.1-10.1-28.6 1-39.1s28.6-10 39.1 1c0 0 2.4 2.5 2.5 2.5 57.3 60.7 89.5 141.9 90.6 228.6 1.1 86.6-29 168.7-84.8 231-5.6 6-13.1 9.1-20.7 9.1zM256.7 401.1h-166c-15.2 0-27.7-12.4-27.7-27.7 0-15.2 12.4-27.7 27.7-27.7h165.9c15.2 0 27.7 12.4 27.7 27.7 0 15.3-12.4 27.7-27.6 27.7z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M542 127.2L276.2 393c-10.8 10.8-28.4 10.8-39.1 0-10.8-10.8-10.8-28.4 0-39.1L502.9 88.1c10.8-10.8 28.4-10.8 39.1 0 10.8 10.8 10.8 28.4 0 39.1zM542 899.6L276.2 633.8c-10.8-10.8-28.4-10.8-39.1 0-10.8 10.8-10.8 28.4 0 39.1l265.8 265.8c10.8 10.8 28.4 10.8 39.1 0 10.8-10.8 10.8-28.4 0-39.1z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M494.8 919.1V107.7c0-15.2 12.4-27.7 27.7-27.7 15.2 0 27.7 12.4 27.7 27.7v811.4c0 15.2-12.4 27.7-27.7 27.7-15.3 0-27.7-12.5-27.7-27.7zM256.5 681H90.6c-15.2 0-27.7-12.4-27.7-27.7 0-15.2 12.4-27.7 27.7-27.7h165.9c15.2 0 27.7 12.4 27.7 27.7-0.1 15.2-12.5 27.7-27.7 27.7z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IconIconVolumeUp.defaultProps = {
  size: 18,
};

IconIconVolumeUp = React.memo ? React.memo(IconIconVolumeUp) : IconIconVolumeUp;

export default IconIconVolumeUp;