import Sidebar from "./Sidebar";
import { Container } from "./styles";

type Props = {
  children?: React.ReactElement;
};

const SettingsLayout = ({ children }: Props) => (
  <Container>
    <Sidebar />
    {children}
  </Container>
);

export { SettingsLayout as default };
