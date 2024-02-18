import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgBigPlusIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 8.333v23.334M8.333 20h23.334"
    />
  </Svg>
);
export default SvgBigPlusIcon;
