import { FC, memo } from "react";
//import Lottie from 'react-lottie-player'

type Props = {
  className?: string;
  color?: "white" | "black";
};

const Dots: FC<Props> = (props) => {
  const { className, color = "black" } = props;

  return (
    /*     <Lottie
      className={className}
      loop
      animationData={color === 'black' ? DOTS_BLACK : DOTS_WHITE}
      play
    /> */
    <></>
  );
};

export default memo(Dots);
