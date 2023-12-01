import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const LikeIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24.000000 24.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}>
    <G
      transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none">
      <Path d="M110 215 c0 -8 -11 -25 -26 -38 -22 -21 -25 -30 -22 -83 l3 -59 57 -3 57 -3 21 41 c28 54 24 84 -12 88 -21 3 -28 9 -28 26 0 25 -17 46 -37 46 -7 0 -13 -7 -13 -15z m25 -45 c-6 -29 -5 -30 29 -30 41 0 43 -5 19 -55 -15 -32 -20 -35 -60 -35 l-43 0 0 46 c0 32 7 54 23 74 29 37 40 37 32 0z" />
      <Path d="M20 95 c0 -37 4 -65 10 -65 6 0 10 28 10 65 0 37 -4 65 -10 65 -6 0 -10 -28 -10 -65z" />
    </G>
  </Svg>
);
export default LikeIcon;
