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

let IconVip: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M552.96 200.128a64 64 0 0 1 8.213333 8.213333L682.666667 354.133333l134.016-98.965333a64 64 0 0 1 100.117333 66.986667L789.333333 832H234.666667L107.2 322.176a64 64 0 0 1 100.117333-67.008L341.333333 354.133333l121.493334-145.792a64 64 0 0 1 90.154666-8.213333zM512 249.301333l-160.128 192.170667-182.570667-134.826667L284.629333 768h454.741334l115.328-461.354667-182.570667 134.826667L512 249.301333z m149.333333 400.64v68.266667H362.666667v-68.266667h298.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconVip.defaultProps = {
  size: 18,
};

IconVip = React.memo ? React.memo(IconVip) : IconVip;

export default IconVip;
