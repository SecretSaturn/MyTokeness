import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={48} cy={48} r={48} fill="#FCF9D3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 93.12c24.92 0 45.12-20.2 45.12-45.12 0-24.92-20.2-45.12-45.12-45.12C23.08 2.88 2.88 23.08 2.88 48c0 24.92 20.2 45.12 45.12 45.12zM48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48z"
        fill="#1B1B1B"
      />
      <path
        d="M74.175 44.073c-.634-4.161-2.696-8.503-5.508-11.622-3.369-3.726-7.485-5.465-11.6-4.904-10.004 1.354-12.116 10.03-13.99 17.668l-.006.02-.017.078c-1.666 6.764-3.104 12.604-9.215 13.421-4.031.557-7.127-4.856-7.727-8.796l-.084-.554-.01.001c-.637-5.24.651-10.261 3.823-14.965l-.332 6.078 2.689-1.043.788-12.156-11.386 5.32.096 2.683 5.716-2.726c-3.71 5.457-5.23 11.508-4.365 17.612l.047.314c.67 4.393 2.58 8.984 5.118 12.288 3.147 4.138 7.145 6.216 11.247 5.875 4.503-.374 7.903-2.406 10.397-6.22 2.154-3.31 3.313-7.384 4.433-11.33l.005-.03c1.986-6.963 3.699-12.987 9.844-13.516 2.348-.178 4 1.292 4.97 2.554 1.087 1.424 1.92 3.417 2.21 5.322.035.231.06.454.085.678.406 4.84-2.472 11.22-5.528 15.508l.34-6.212-2.688 1.044-.788 12.156 11.384-5.33-.096-2.682-5.611 2.671c3.98-5.631 6.824-12.218 5.759-19.205zm-10.255-9.49c-3.721.293-6.544 2.076-8.616 5.43-1.825 2.927-2.88 6.683-3.898 10.31l-.018.07c-1.108 3.84-2.153 7.481-3.95 10.281-1.988 3.095-4.596 4.674-8.203 4.969-3.577.308-6.335-1.959-8.134-4.136a7.45 7.45 0 003.184.282c3.68-.504 6.405-2.367 8.34-5.69 1.686-2.906 2.577-6.562 3.439-10.1 1.794-7.35 3.487-14.307 11.458-15.399 3.058-.428 6.233.972 8.927 3.939l.273.3a7.423 7.423 0 00-2.802-.255z"
        fill="#1B1B1B"
      />
    </svg>
  )
}

export default SvgComponent
