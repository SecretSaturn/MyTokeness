import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1rem"
      height="1rem"
      {...props}
    >
      <path
        d="M445.507 108.902v-.049.049zm50.201 154.618a238.76 238.76 0 01-41.492 127.589l-6.919-30.435-105.957 12.997-45.179 96.872 26.456 15.784.058.223a240.798 240.798 0 01-133.593 0v-.223l26.484-15.755-45.179-96.872-105.976-13.026-6.928 30.435A238.76 238.76 0 0116 263.559l23.388 20.4 78.001-72.814-20.155-105.001-31.042 2.758a240.458 240.458 0 01108.037-78.64l.338.252-11.998 28.171 93.28 51.688 93.281-51.688-12.241-28.646a240.56 240.56 0 01108.618 78.863l-30.674-2.749-20.475 105.002 78.011 72.814 23.339-20.449zm-142.785-34.616l-97.074-70.327-97.073 70.327 37.205 113.653h120.075l36.867-113.653z"
        opacity={0.4}
      />
      <path
        d="M349.256 58.684l-12.239-28.645a240.92 240.92 0 00-162.081 0l-12.24 28.645 93.28 51.689 93.28-51.689zM97.36 106.143L66.319 108.9A238.989 238.989 0 0016 256c0 2.525.049 5.043.127 7.559l23.388 20.4 78.001-72.814L97.36 106.143zm218.823 236.453l36.867-113.694-97.074-70.326-97.075 70.326 37.207 113.655 120.075.039zM445.633 108.9l-30.674-2.748-20.475 105.002 78.011 72.815 23.378-20.401c.078-2.515.127-5.033.127-7.558a238.99 238.99 0 00-50.367-147.11zM64.538 360.674l-6.929 30.435a240.423 240.423 0 00131.261 95.373l26.794-15.939-45.18-96.873-105.946-12.996zm276.92 12.996l-45.181 96.873 26.794 15.939a240.422 240.422 0 00131.272-95.373l-6.92-30.435-105.965 12.996z"
        className="prefix__fa-primary"
      />
    </svg>
  );
}

export default SvgComponent;
