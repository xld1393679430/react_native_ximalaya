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

let IconIconPause: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 142.54342c-203.735785 0-369.507745 165.77196-369.507745 369.507744s165.77196 369.507745 369.507745 369.507745 369.507745-165.77196 369.507745-369.507745-165.77196-369.507745-369.507745-369.507744z m0 683.144199c-172.934946 0-313.738783-140.701509-313.738783-313.738783s140.701509-313.738783 313.738783-313.738783c172.934946 0 313.738783 140.701509 313.738783 313.738783S685.037274 825.687619 512 825.687619z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M420.006795 318.138903c-23.126212 0-41.852303 18.726092-41.852303 41.852303V664.111122c0 23.126212 18.726092 41.852303 41.852303 41.852304 23.126212 0 41.852303-18.726092 41.852304-41.852304V359.888878c0-23.023883-18.726092-41.749975-41.852304-41.749975zM603.993205 318.138903c-23.126212 0-41.852303 18.726092-41.852304 41.852303V664.111122c0 23.126212 18.726092 41.852303 41.852304 41.852304 23.126212 0 41.852303-18.726092 41.852303-41.852304V359.888878c0-23.023883-18.726092-41.749975-41.852303-41.749975z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconIconPause.defaultProps = {
  size: 18,
};

IconIconPause = React.memo ? React.memo(IconIconPause) : IconIconPause;

export default IconIconPause;
