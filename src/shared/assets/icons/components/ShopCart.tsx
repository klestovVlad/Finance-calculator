import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgShopCart = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#2E3A59"
      fillRule="evenodd"
      d="M17.132 14.5H9.514l-1.637-6h12.255zm4.7-7.052a1.99 1.99 0 0 0-1.7-.948h-12.8l-.617-2.263A1 1 0 0 0 5.75 3.5h-2a1 1 0 1 0 0 2h1.236l2.799 10.263a1 1 0 0 0 .965.737h9c.379 0 .725-.214.895-.553l3.276-6.553a1.99 1.99 0 0 0-.088-1.946M8.25 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m8.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShopCart;
