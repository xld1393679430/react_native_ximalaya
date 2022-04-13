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

let IconPaste: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 469.333333h-42.666667V213.333333a42.666667 42.666667 0 0 0-42.666666-42.666666h-128V128a42.666667 42.666667 0 0 0-42.666667-42.666667H384a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666667H213.333333a42.666667 42.666667 0 0 0-42.666666 42.666666v597.333334a42.666667 42.666667 0 0 0 42.666666 42.666666h256v42.666667a42.666667 42.666667 0 0 0 42.666667 42.666667h384a42.666667 42.666667 0 0 0 42.666667-42.666667v-384a42.666667 42.666667 0 0 0-42.666667-42.666667zM426.666667 170.666667h170.666666v85.333333h-170.666666V170.666667z m42.666666 341.333333v256H256V256h85.333333v42.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h256a42.666667 42.666667 0 0 0 42.666667-42.666666V256h85.333333v213.333333h-256a42.666667 42.666667 0 0 0-42.666667 42.666667z m384 341.333333h-298.666666v-298.666666h298.666666v298.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPaste.defaultProps = {
  size: 18,
};

IconPaste = React.memo ? React.memo(IconPaste) : IconPaste;

export default IconPaste;
