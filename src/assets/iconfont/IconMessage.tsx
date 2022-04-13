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

let IconMessage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M240 658.08h220.784l55.744 65.04 55.744-65.04h220.768V272H240v386.08z m-48 32V240a16 16 0 0 1 16-16h617.04a16 16 0 0 1 16 16v450.08a16 16 0 0 1-16 16H594.336l-65.664 76.64a16 16 0 0 1-24.304 0l-65.664-76.64H208a16 16 0 0 1-16-16zM366.256 498.56a33.488 33.488 0 1 1 0-66.992 33.488 33.488 0 0 1 0 66.992z m150.272 0a33.488 33.488 0 1 1 0-66.992 33.488 33.488 0 0 1 0 66.992z m150.24 0a33.488 33.488 0 1 1 0-66.992 33.488 33.488 0 0 1 0 66.992z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMessage.defaultProps = {
  size: 18,
};

IconMessage = React.memo ? React.memo(IconMessage) : IconMessage;

export default IconMessage;
