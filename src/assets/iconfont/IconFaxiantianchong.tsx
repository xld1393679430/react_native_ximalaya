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

let IconFaxiantianchong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M510.754816 197.676032c-274.446336 0-496.92672 153.124864-496.92672 297.608192s222.481408 297.608192 496.92672 297.608192 496.929792-153.124864 496.929792-297.608192S785.201152 197.676032 510.754816 197.676032zM510.754816 643.165184c-81.671168 0-147.881984-66.207744-147.881984-147.881984 0-81.671168 66.210816-147.881984 147.881984-147.881984 81.673216 0 147.881984 66.210816 147.881984 147.881984C658.6368 576.95744 592.428032 643.165184 510.754816 643.165184z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M425.955328 516.5568c-9.350144 0-17.021952-7.456768-17.236992-16.827392-0.72192-29.789184 11.77088-57.977856 34.29888-77.420544 7.18336-6.207488 18.076672-5.4272 24.323072 1.796096 6.226944 7.222272 5.4272 18.115584-1.796096 24.361984-14.660608 12.649472-22.800384 30.999552-22.351872 50.403328 0.234496 9.526272-7.30112 17.452032-16.827392 17.686528C426.228736 516.5568 426.092544 516.5568 425.955328 516.5568z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFaxiantianchong.defaultProps = {
  size: 18,
};

IconFaxiantianchong = React.memo ? React.memo(IconFaxiantianchong) : IconFaxiantianchong;

export default IconFaxiantianchong;
