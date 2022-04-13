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

let IconDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M764.326842 578.044182l-222.712361 222.722594c-3.837398 3.837398-9.046027 5.996574-14.479783 5.996574-5.423523 0-10.632151-2.159176-14.46955-5.996574l-222.722594-222.732827c-7.992021-7.992021-7.992021-20.947078 0-28.939099s20.947078-7.992021 28.939099 0l187.78692 187.78692 0-603.89392c0-11.307533 9.15859-20.466124 20.466124-20.466124s20.466124 9.15859 20.466124 20.466124l0 603.89392 187.776687-187.776687c8.002254-7.992021 20.957311-7.992021 28.949332 0S772.318864 570.052161 764.326842 578.044182z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M842.875826 858.071923c0 11.2973-9.15859 20.466124-20.466124 20.466124l-590.550007 0c-11.307533 0-20.466124-9.168824-20.466124-20.466124 0-11.307533 9.15859-20.466124 20.466124-20.466124l590.550007 0C833.717236 837.605799 842.875826 846.76439 842.875826 858.071923z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconDown.defaultProps = {
  size: 18,
};

IconDown = React.memo ? React.memo(IconDown) : IconDown;

export default IconDown;
