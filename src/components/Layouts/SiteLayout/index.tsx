import { FC, useEffect } from "react";

import useMutationGetAccounts from "../../../hooks/useMutationGetAccounts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container } from "./styles";

interface Config {
  hideSidebar?: boolean;
}

type Props = {
  config?: Config;
  children?: React.ReactElement;
};

const SiteLayout: FC<Props> = ({ children, config = {} }) => {
  const { hideSidebar } = config;

  const { mutate } = useMutationGetAccounts();

  useEffect(() => {
    window.addEventListener("keplr_keystorechange", () => mutate());

    return () =>
      window.removeEventListener("keplr_keystorechange", () => mutate());
  }, [mutate]);

  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <>
      <Header />
      <Container full={hideSidebar}>
        {!hideSidebar && <Sidebar />}
        {children}
      </Container>
    </>
  );
};

const getLayout = (page: JSX.Element, config?: Config): JSX.Element => (
  <SiteLayout config={config}>{page}</SiteLayout>
);

export { SiteLayout as default, getLayout };
