import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1rem"
      height="1rem"
      {...props}
    >
      <path
        d="M21.08 133l99.11 100.33L216 137.52 146 33.11C84.06-55.29-52.15 52.53 21.08 133zm435.68 258.63a15.26 15.26 0 01-14.59-10c-18.13-47.78-48.4-65.38-82.65-70.71l-101.69 101.7C266.65 476 315.43 512 384 512c90.07 0 128-72.38 128-154.73-9.78 6.73-44.14 34.36-55.24 34.36z"
        opacity={0.4}
      />
      <path
        d="M19.08 379.68L.33 487.12a21.23 21.23 0 0024.59 24.56l107.44-18.84 296.93-296.93L316.08 82.72zM497.94 59.32l-45.26-45.25a48 48 0 00-67.94 0l-46 46 113.2 113.2 46-46a48 48 0 000-67.95z"
        className="prefix__fa-primary"
      />
    </svg>
  );
}

export default SvgComponent;
