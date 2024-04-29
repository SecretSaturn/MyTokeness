import { FC, memo } from "react";

type Props = {
  size?: number;
};

const Spinner: FC<Props> = (props) => {
  const { size = 50 } = props;

  return <></>;
};

export default memo(Spinner);
