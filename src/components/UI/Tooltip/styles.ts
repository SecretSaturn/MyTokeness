import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  line-height: 0;
  outline: none;
  padding: 0;
`;

const Content = styled.div`
  background: ${(props) => props.theme.tooltip.content.bg};
  border-radius: ${(props) => props.theme.border.radii.md};
  color: ${(props) => props.theme.tooltip.content.color};
  font-size: ${(props) => props.theme.font.sizes.sm};
  font-weight: ${(props) => props.theme.font.weights.semibold};
  padding: 6px 15px;
`;

export { Button, Content };
