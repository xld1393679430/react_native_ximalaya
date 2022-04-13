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

let IconIconPlayArrow: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M762.475 542.23l-440.49 306.616c-21.593 12.955-47.504 8.637-60.46-12.956-4.319-4.318-8.637-12.956-8.637-21.593V201.066c0-25.912 17.274-43.186 43.185-43.186 8.637 0 17.274 4.319 25.912 8.637l440.49 306.616c21.593 12.956 25.911 38.867 12.956 60.46-4.319 4.318-8.637 8.637-12.956 8.637z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconPlayArrow.defaultProps = {
  size: 18,
};

IconIconPlayArrow = React.memo ? React.memo(IconIconPlayArrow) : IconIconPlayArrow;

export default IconIconPlayArrow;
