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

let IconIconBofang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 513.792c0 32.896-17.92 63.296-47.04 79.744a95.808 95.808 0 0 1-94.016 0 91.712 91.712 0 0 1-46.976-79.744c0-32.896 17.92-63.232 46.976-79.68a95.808 95.808 0 0 1 94.08 0c29.056 16.448 46.976 46.784 46.976 79.68zM350.272 956.8c-212.352-257.92-210.88-633.408 3.52-889.792 15.616-18.688 31.744-35.968 48.64-52.48a53.312 53.312 0 0 1 74.112 0.96 50.752 50.752 0 0 1-1.664 73.856 312.32 312.32 0 0 0-7.808 7.232 590.976 590.976 0 0 0-3.2 831.552c2.688 2.688 2.688 2.688 7.296 6.976a50.752 50.752 0 0 1 1.024 73.856 53.312 53.312 0 0 1-73.984 0.32 682.24 682.24 0 0 1-48-52.48zM551.68 295.68a393.6 393.6 0 0 1 43.584-49.92c20.16-19.52 53.76-18.88 74.368 1.536a50.816 50.816 0 0 1-3.2 75.136 112.448 112.448 0 0 0-9.472 8.704 270.08 270.08 0 0 0-8.576 355.904c2.88 3.52 8.768 8.96 17.28 16.512 22.72 19.84 23.68 54.208 2.048 75.2l-1.6 1.536a52.16 52.16 0 0 1-72.064 0.832A371.264 371.264 0 0 1 551.68 295.68z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconBofang.defaultProps = {
  size: 18,
};

IconIconBofang = React.memo ? React.memo(IconIconBofang) : IconIconBofang;

export default IconIconBofang;
