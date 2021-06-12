import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { SimpleAccordion } from './SimpleAccordion'

export const ContainerMaterial = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Дисциплины</h1>
        <SimpleAccordion />
      </Container>
    </>
  )
}