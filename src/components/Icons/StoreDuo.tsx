import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 616 512"
      width="1rem"
      height="1rem"
      {...props}
    >
      <path
        d="M547.69 286.8a102.1 102.1 0 0016.4-3.6V480a32 32 0 01-32 32H84a32 32 0 01-32-32V283.2a125.89 125.89 0 0016.4 3.6 135.49 135.49 0 0018 1.2 132.81 132.81 0 0029.51-3.8V384H500v-99.8a127.12 127.12 0 0029.51 3.8 138.38 138.38 0 0018.18-1.2z"
        opacity={0.4}
      />
      <path
        d="M602 118.6c33.6 53.6 3.8 128-59 136.4a102.9 102.9 0 01-13.7.9 99.08 99.08 0 01-73.81-33.1A98.83 98.83 0 01316 230.88a96.26 96.26 0 01-8.08-8.08 98.9 98.9 0 01-139.62 8 97.4 97.4 0 01-8-8 98.75 98.75 0 01-73.81 33.1 104.6 104.6 0 01-13.7-.9C10.12 246.5-19.58 172.1 14 118.6L78.83 15A32 32 0 01106 0h404a32 32 0 0127.07 15z"
        className="prefix__fa-primary"
      />
    </svg>
  );
}

export default SvgComponent;
