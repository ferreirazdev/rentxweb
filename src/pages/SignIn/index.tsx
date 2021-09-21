
import { 
  Container,
  ContentWrapper,
  TitleWrapper,
  FormWrapper,
  Form,
  Input,
  Button,
  Link,
} from "./styles"

export function SignIn(){
  return (
    <Container>
      <ContentWrapper>
        <TitleWrapper>
          <h1>Estamos quase lá...</h1>
          <h2>
            Faça seu login para começar <br />
            uma experiência incrível.
          </h2>
        </TitleWrapper>

        <FormWrapper>
          <Form>
            <Input />
            <Input />
            <Button>Login</Button>
            <Link>Criar conta</Link>
          </Form>
        </FormWrapper>
      </ContentWrapper>


      
    </Container>
  )
}