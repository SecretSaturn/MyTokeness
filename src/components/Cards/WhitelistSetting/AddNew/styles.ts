import styled from 'styled-components'

const Container = styled.div``

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.space.md};
  row-gap: ${(props) => props.theme.space.md};
`

const Options = styled.div`
  column-gap: ${(props) => props.theme.space.lg};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  row-gap: ${(props) => props.theme.space.md};
`

export { Container, Content, Options }
