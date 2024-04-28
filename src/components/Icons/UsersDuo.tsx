import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      width="1rem"
      height="1rem"
      {...props}
    >
      <path
        d="M96 224a64 64 0 10-64-64 64.06 64.06 0 0064 64zm480 32h-64a63.81 63.81 0 00-45.1 18.6A146.27 146.27 0 01542 384h66a32 32 0 0032-32v-32a64.06 64.06 0 00-64-64zm-512 0a64.06 64.06 0 00-64 64v32a32 32 0 0032 32h65.9a146.64 146.64 0 0175.2-109.4A63.81 63.81 0 00128 256zm480-32a64 64 0 10-64-64 64.06 64.06 0 0064 64z"
        opacity={0.4}
      />
      <path
        d="M396.8 288h-8.3a157.53 157.53 0 01-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 00128 403.2V432a48 48 0 0048 48h288a48 48 0 0048-48v-28.8A115.23 115.23 0 00396.8 288zM320 256a112 112 0 10-112-112 111.94 111.94 0 00112 112z"
        className="prefix__fa-primary"
      />
    </svg>
  );
}

export default SvgComponent;
