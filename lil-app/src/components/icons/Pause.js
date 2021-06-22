import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPause(props) {
  return (
    <Svg
      width={51}
      height={51}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 25.5C0 39.583 11.417 51 25.5 51S51 39.583 51 25.5 39.583 0 25.5 0 0 11.417 0 25.5zm46.364 0c0 11.523-9.341 20.864-20.864 20.864-11.523 0-20.864-9.341-20.864-20.864 0-11.523 9.341-20.864 20.864-20.864 11.523 0 20.864 9.341 20.864 20.864z"
        fill="#FF334B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.59 37.602l2.55-4.112 2.55 4.112V15.727c0-1.298-.326-2.35-.728-2.35h-3.643c-.403 0-.729 1.052-.729 2.35v21.875zm2.55-6.74L28.32 33.8V15.727h3.643V33.8l-1.822-2.937z"
        fill="#fff"
      />
      <Path fill="#fff" d="M28.006 15.584h4.18v18.393h-4.18z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.393 37.602l2.55-4.112 2.55 4.112V15.727c0-1.298-.326-2.35-.728-2.35h-3.643c-.402 0-.729 1.052-.729 2.35v21.875zm2.55-6.74L19.122 33.8V15.727h3.643V33.8l-1.822-2.937z"
        fill="#fff"
      />
      <Path fill="#fff" d="M18.809 15.584h4.18v18.393h-4.18z" />
    </Svg>
  );
}

export default SvgPause;
