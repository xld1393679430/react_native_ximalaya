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

let IconUser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 192c102.4 0 153.6 51.2 153.6 153.6C665.6 480 576 576 576 576L556.8 595.2l0 25.6c0 57.6 44.8 121.6 121.6 121.6 102.4 0 102.4 19.2 102.4 44.8l0 0C768 800 710.4 832 505.6 832c-185.6 0-243.2-32-262.4-38.4l0-6.4c0-25.6 0-44.8 102.4-44.8 76.8 0 121.6-64 121.6-121.6L467.2 595.2 448 576c0 0-89.6-96-89.6-230.4C358.4 243.2 409.6 192 512 192M512 128C403.2 128 294.4 185.6 294.4 345.6s108.8 275.2 108.8 275.2 0 57.6-57.6 57.6-166.4 0-166.4 108.8c0 0-44.8 108.8 326.4 108.8s332.8-108.8 332.8-108.8c0-108.8-108.8-108.8-166.4-108.8S620.8 620.8 620.8 620.8s108.8-108.8 108.8-275.2S620.8 128 512 128L512 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconUser.defaultProps = {
  size: 18,
};

IconUser = React.memo ? React.memo(IconUser) : IconUser;

export default IconUser;
