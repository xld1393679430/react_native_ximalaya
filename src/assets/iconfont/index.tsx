/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconErji from './IconErji';
import IconFaxiantianchong from './IconFaxiantianchong';
import IconWodexiao from './IconWodexiao';
import IconShouye1 from './IconShouye1';
export { default as IconErji } from './IconErji';
export { default as IconFaxiantianchong } from './IconFaxiantianchong';
export { default as IconWodexiao } from './IconWodexiao';
export { default as IconShouye1 } from './IconShouye1';

export type IconNames = 'icon-erji' | 'icon-faxiantianchong' | 'icon-wodexiao' | 'icon-shouye1';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-erji':
      return <IconErji key="1" {...rest} />;
    case 'icon-faxiantianchong':
      return <IconFaxiantianchong key="2" {...rest} />;
    case 'icon-wodexiao':
      return <IconWodexiao key="3" {...rest} />;
    case 'icon-shouye1':
      return <IconShouye1 key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
