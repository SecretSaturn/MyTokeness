import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="1rem"
      height="1rem"
      {...props}
    >
      <path d="M352 128A128 128 0 11224 0a128 128 0 01128 128z" opacity={0.4} />
      <path
        d="M313.6 288h-16.7a174.1 174.1 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6A134.43 134.43 0 00313.6 288z"
        className="prefix__fa-primary"
      />
    </svg>
  );
}

export default SvgComponent;
