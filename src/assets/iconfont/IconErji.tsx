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

let IconErji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1029 1024" width={size} height={size} {...rest}>
      <Path
        d="M-2.048 714.752q0-50.176 13.312-87.04t48.128-69.632l0 313.344q-35.84-31.744-48.64-68.608t-12.8-88.064zM957.44 558.08q30.72 23.552 49.664 65.024t18.944 91.648q0 51.2-14.848 87.552t-53.76 69.12l0-313.344zM835.584 512q19.456 0 38.912 15.36t19.456 43.008l0 265.216q0 12.288-5.632 23.04t-13.824 19.456-18.944 13.312-19.968 4.608l-71.68 0q-26.624 0-44.544-16.384t-17.92-44.032l0-265.216q0-27.648 19.968-43.008t42.496-15.36l71.68 0zM249.856 512q29.696 0 48.128 14.336t18.432 45.056l0 258.048q0 30.72-15.872 48.128t-41.472 17.408l-74.752 0q-30.72 0-45.568-18.432t-14.848-45.056l0-260.096q0-30.72 18.432-45.056t44.032-14.336l63.488 0zM509.952 62.464q80.896 0 152.576 27.648t125.44 78.336 84.48 121.344 30.72 155.648l-67.584 0q-25.6 0-46.08 0.512t-20.48-0.512q0-63.488-21.504-112.128t-56.832-81.408-81.92-49.152-98.816-16.384q-51.2 0-97.28 21.504t-81.408 57.856-56.832 82.944-21.504 96.768l-135.168 0q0-84.992 30.72-155.648t83.968-121.344 124.928-78.336 152.576-27.648z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconErji.defaultProps = {
  size: 18,
};

IconErji = React.memo ? React.memo(IconErji) : IconErji;

export default IconErji;
