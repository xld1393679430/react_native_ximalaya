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

let IconIconFullscreenExpand: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M314.176 665.536l45.248 45.248-121.28 121.344h82.048v64h-192v-192h64v83.456l121.984-122.048z m396.544-0.64l121.344 121.216V704h64v192h-192v-64h83.456l-122.048-121.984 45.248-45.248zM320.064 128v64H236.544l122.048 121.92-45.248 45.312-121.28-121.28v82.048h-64V128h192z m576.128 0.064v192h-64V236.672l-121.984 121.984-45.248-45.248 121.216-121.28h-81.984v-64h192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconFullscreenExpand.defaultProps = {
  size: 18,
};

IconIconFullscreenExpand = React.memo ? React.memo(IconIconFullscreenExpand) : IconIconFullscreenExpand;

export default IconIconFullscreenExpand;
