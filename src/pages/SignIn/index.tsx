import { useHistory } from 'react-router-dom'


import { 
  Container,
  ContentWrapper,
  TitleWrapper,
  FormWrapper,
  Form,
  Input,
  ButtonLogin,
  CreateAccount,
  ImageWrapper,
  Image,
} from "./styles"

import Logo from '../../assets/logo.svg'

export function SignIn(){
  const history = useHistory()

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
            <ButtonLogin onClick={() => history.push('/')}>Login</ButtonLogin>
            <CreateAccount>Criar conta</CreateAccount>
          </Form>
        </FormWrapper>
      </ContentWrapper>

      <ImageWrapper>
        <Image src={Logo}/>
      </ImageWrapper>

      
    </Container>
  )
}