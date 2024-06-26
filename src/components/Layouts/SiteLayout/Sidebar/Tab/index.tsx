import Link from "next/link";
import { useRouter } from "next/router";
import { FC, memo, useMemo, useState } from "react";
import { useSpring, useTransition } from "react-spring";

import { Item as IItem } from "../../../../../../utils/constants";
import Item from "./Item";
import { Container, Header, Label, Menu, StyledIcon, Wrapper } from "./styles";
import useDimensions from "../../../../../../utils/useDimensions";

type Props = {
  item: IItem;
  section?: string;
  id?: string;
};

const matchRoute = (path: string, section?: string, id?: string) => {
  if (section === "token") {
    return path.split("/")[1] === id;
  } else {
    return path === "/";
  }
};

const Tab: FC<Props> = (props) => {
  const { item, section, id } = props;
  const { icon, label, menu, route, external } = item;

  const router = useRouter();
  const selected = useMemo(
    () => matchRoute(router.asPath, section, id),
    [router.asPath, section, id],
  );

  const [ref, dimensions] = useDimensions();

  // component state
  const [open, setOpen] = useState(selected);

  // react spring
  const { height } = useSpring({
    height: open ? ((dimensions as any).height || 0) + 60 : 60,
  });
  const transitions = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const onClickHeader = () => {
    if (menu) {
      setOpen(!open);
    } else {
      if (external) {
        window.open(route, "_blank");
      } else {
        router.push(route, undefined, { shallow: true });
      }
    }
  };

  return (
    <Container style={{ height }}>
      <Header selected={selected} onClick={onClickHeader}>
        <Wrapper>
          <StyledIcon name={icon} />
          <Label>{label}</Label>
        </Wrapper>
        {menu && (
          <StyledIcon small="true" name={open ? "caret-up" : "caret-down"} />
        )}
        {external && <StyledIcon name="external-link-duo" small="true" />}
      </Header>
      {menu &&
        transitions(
          (_, item) =>
            item && (
              <Menu ref={ref as any}>
                {menu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.route}
                    as={item.as}
                    shallow={true}
                    passHref
                  >
                    <Item
                      label={item.label}
                      icon={item.icon}
                      selected={router.asPath === (item.as || item.route)}
                    />
                  </Link>
                ))}
              </Menu>
            ),
        )}
    </Container>
  );
};

export default memo(Tab);
