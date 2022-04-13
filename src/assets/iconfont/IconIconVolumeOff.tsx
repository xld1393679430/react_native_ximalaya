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

let IconIconVolumeOff: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M626.4 640.2l287.3-287.3c10.8-10.8 28.4-10.8 39.2 0 10.8 10.8 10.8 28.4 0 39.2L665.6 679.4c-10.8 10.8-28.4 10.8-39.2 0-10.8-10.8-10.8-28.4 0-39.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M665.6 352.9l287.3 287.3c10.8 10.8 10.8 28.4 0 39.2-10.8 10.8-28.4 10.8-39.2 0L626.4 392.1c-10.8-10.8-10.8-28.4 0-39.2 10.8-10.8 28.4-10.8 39.2 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M259.7 405.8H93.3c-15.2 0-27.7-12.5-27.7-27.7s12.5-27.7 27.7-27.7h166.4c15.2 0 27.7 12.5 27.7 27.7 0 15.3-12.5 27.7-27.7 27.7z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M545.8 131.2L279.2 397.8c-10.8 10.8-28.4 10.8-39.2 0-10.8-10.8-10.8-28.4 0-39.2L506.6 92c10.8-10.8 28.4-10.8 39.2 0 10.8 10.8 10.8 28.4 0 39.2zM545.8 905.7L279.2 639.1c-10.8-10.8-28.4-10.8-39.2 0-10.8 10.8-10.8 28.4 0 39.2l266.5 266.5c10.8 10.8 28.4 10.8 39.2 0 10.9-10.7 10.9-28.4 0.1-39.1z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M498.4 925.2V111.6c0-15.2 12.5-27.7 27.7-27.7s27.7 12.5 27.7 27.7v813.6c0 15.2-12.5 27.7-27.7 27.7-15.2 0.1-27.7-12.4-27.7-27.7zM259.5 686.5H93.1c-15.2 0-27.7-12.5-27.7-27.7s12.5-27.7 27.7-27.7h166.4c15.2 0 27.7 12.5 27.7 27.7s-12.5 27.7-27.7 27.7z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

IconIconVolumeOff.defaultProps = {
  size: 18,
};

IconIconVolumeOff = React.memo ? React.memo(IconIconVolumeOff) : IconIconVolumeOff;

export default IconIconVolumeOff;
