/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";

import { SIDEBAR_TABS } from "../../../../../utils/constants";
import { Container, SectionHeader } from "./styles";
import Tab from "./Tab";

const Sidebar: FC = () => {
  return (
    <>
      <Container>
        <Tab item={SIDEBAR_TABS.HOME} />
        <SectionHeader>TOKEN</SectionHeader>
        {Object.entries(SIDEBAR_TABS.TOKEN).map(([key, value]) => (
          <Tab key={key} item={value} section="token" id={key} />
        ))}
      </Container>
    </>
  );
};

export default Sidebar;
