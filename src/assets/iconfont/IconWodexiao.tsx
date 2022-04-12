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

let IconWodexiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.128 682.666667C985.6 682.666667 980.906667 975.786667 980.906667 975.786667c3.584 26.624-15.616 48.213333-42.922667 48.213333H86.272c-27.306667 0-47.573333-21.888-42.922667-48.213333 0 0-4.778667-293.12 468.778667-293.12zM512 0h298.666667v298.666667a298.666667 298.666667 0 1 1-298.666667-298.666667z"
        fill={getIconColor(color, 0, '#3D3D3D')}
      />
    </Svg>
  );
};

IconWodexiao.defaultProps = {
  size: 18,
};

IconWodexiao = React.memo ? React.memo(IconWodexiao) : IconWodexiao;

export default IconWodexiao;
