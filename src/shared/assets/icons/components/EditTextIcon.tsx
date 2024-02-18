import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEditTextIcon = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill="#271E4A"
      fillRule="evenodd"
      d="M5.992 3.661 3.183 6.47l-.132 1.478 1.489-.136 2.8-2.803zm2.991-.297L7.636 2.017l-.974.974L8.009 4.34zM2.546 8.998 2.5 9a.5.5 0 0 1-.498-.545l.19-2.086a1 1 0 0 1 .284-.606l4.498-4.499c.351-.352.988-.334 1.358.035l1.37 1.37c.383.383.398.991.034 1.356L5.237 8.524a.98.98 0 0 1-.606.284zM2.5 10h7c.275 0 .5.225.5.5s-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5c0-.275.225-.5.5-.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEditTextIcon;
