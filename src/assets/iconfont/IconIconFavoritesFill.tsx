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

let IconIconFavoritesFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1027 1024" width={size} height={size} {...rest}>
      <Path
        d="M298.666667 52.48a337.92 337.92 0 0 0-58.026667 5.546667 298.666667 298.666667 0 0 0-144.213333 512l388.266666 388.693333a46.506667 46.506667 0 0 0 65.706667 0l388.266667-389.546667a298.666667 298.666667 0 0 0-154.026667-506.453333A337.066667 337.066667 0 0 0 725.333333 57.173333a294.4 294.4 0 0 0-213.333333 90.453334 294.826667 294.826667 0 0 0-213.333333-95.146667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconFavoritesFill.defaultProps = {
  size: 18,
};

IconIconFavoritesFill = React.memo ? React.memo(IconIconFavoritesFill) : IconIconFavoritesFill;

export default IconIconFavoritesFill;
