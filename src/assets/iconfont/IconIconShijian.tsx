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

let IconIconShijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 64a362.666667 362.666667 0 1 0 0 725.333334 362.666667 362.666667 0 0 0 0-725.333334z m-39.893333 169.216a32 32 0 0 1 31.744 27.648l0.256 4.352v193.024h185.088a32 32 0 0 1 31.701333 27.690667l0.298667 4.352a32 32 0 0 1-27.690667 31.701333l-4.309333 0.298667h-195.754667a53.333333 53.333333 0 0 1-53.034667-47.872l-0.298666-5.461333V350.549333a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconShijian.defaultProps = {
  size: 18,
};

IconIconShijian = React.memo ? React.memo(IconIconShijian) : IconIconShijian;

export default IconIconShijian;
