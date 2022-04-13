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

let IconHuanyipi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M989.018112 386.996224 632.343552 386.996224l133.317632-133.317632c-67.369984-67.36384-156.937216-104.465408-252.207104-104.465408-95.269888 0-184.841216 37.09952-252.208128 104.46336-67.362816 67.36896-104.465408 156.93824-104.465408 252.210176 0 95.271936 37.102592 184.839168 104.465408 252.208128 67.366912 67.359744 156.937216 104.464384 252.208128 104.464384 95.271936 0 184.839168-37.103616 252.209152-104.469504 5.623808-5.623808 11.014144-11.413504 16.210944-17.339392l89.463808 78.280704c-87.163904 99.544064-215.177216 162.41664-357.883904 162.41664-262.648832 0-475.565056-212.917248-475.565056-475.563008 0-262.65088 212.917248-475.56608 475.565056-475.56608 131.325952 0 250.202112 53.248 336.256 139.313152L989.021184 30.321664l0 356.67456L989.018112 386.996224z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHuanyipi.defaultProps = {
  size: 18,
};

IconHuanyipi = React.memo ? React.memo(IconHuanyipi) : IconHuanyipi;

export default IconHuanyipi;
