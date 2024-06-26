import styled from "styled-components";

import Icon from "../Icons";

const Brand = styled.h1`
  color: ${(props) => props.theme.font.colors.brand};
  font-size: 4.5rem;
  margin: 0;
  margin-bottom: ${(props) => props.theme.space.md};

  span {
    color: ${(props) => props.theme.font.colors.primary};
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.font.colors.primary};
  font-size: 2.2rem;
  font-weight: ${(props) => props.theme.font.weights.semibold};
  margin-bottom: ${(props) => props.theme.space.sm};
  margin-top: 0;
`;

const Wrapper = styled.div`
  bottom: ${(props) => props.theme.space.lg};
  display: flex;
  flex-direction: column;
  position: absolute;
  right: ${(props) => props.theme.space.lg};
  row-gap: ${(props) => props.theme.space.xs};
`;

const StyledIcon = styled(Icon)`
  margin-top: ${(props) => props.theme.space.lg};
`;

export { Brand, Title, Wrapper, StyledIcon };
