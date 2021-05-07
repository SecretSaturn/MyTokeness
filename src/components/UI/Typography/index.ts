import styled from 'styled-components'

interface PageTitleProps {
  readonly center?: boolean
}

const PageTitle = styled.h1<PageTitleProps>`
  color: ${(props) => props.theme.font.colors.brand};
  font-size: 4rem;
  font-weight: ${(props) => props.theme.font.weights.semibold};
  margin-bottom: ${(props) => props.theme.space.lg};
  margin-top: 0;
  ${(props) => props.center && 'text-align: center'};
`

const Text = styled.p`
  color: ${(props) => props.theme.font.colors.secondary};
  font-size: ${(props) => props.theme.font.sizes.md};
  line-height: ${(props) => props.theme.font.lineHeights.md};
  margin: 0;
`

export { PageTitle, Text }
