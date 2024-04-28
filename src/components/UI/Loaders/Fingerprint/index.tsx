import { FC, memo } from "react";

import lottieJson from "../../../../../public/lotties/fingerprint.json";

type Props = {
  size?: number;
};

const Fingerprint: FC<Props> = (props) => {
  const { size = 50 } = props;

  return <></>;
};

export default memo(Fingerprint);
