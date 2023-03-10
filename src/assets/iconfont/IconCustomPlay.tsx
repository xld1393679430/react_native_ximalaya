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

let IconCustomPlay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.598168 482.945267 267.82942 134.053112c-10.614755-6.726192-24.067138-7.133468-35.033911-1.063215-11.030218 6.071276-17.859763 17.653055-17.859763 30.209022l0 697.610348c0 12.549827 6.829546 24.139793 17.859763 30.209022 5.176906 2.858094 10.903328 4.273327 16.622586 4.273327 6.415107 0 12.828167-1.786693 18.411325-5.311982l551.769772-348.747869c9.999748-6.317892 16.07307-17.316387 16.07307-29.14683C835.671239 500.263701 829.59894 489.255996 819.598168 482.945267L819.598168 482.945267zM819.598168 482.945267"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCustomPlay.defaultProps = {
  size: 18,
};

IconCustomPlay = React.memo ? React.memo(IconCustomPlay) : IconCustomPlay;

export default IconCustomPlay;
