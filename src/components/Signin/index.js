import React from 'react';
import { 
  FormButton, 
  FormContent, 
  FormInput, 
  FormLabel, 
  FormWrap, 
  Icon,
  Text,
  Container,
  Form,
  FormH1
} from './signinElements';

function Signin() {
  return (
    <>
     <Container>
      <FormWrap>
        <Icon to="/">muhaj</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButton type='submit'>Countinue</FormButton>
            <Text>Forget password</Text>
          </Form>
        </FormContent>
      </FormWrap>
      </Container> 
    </>
  )
}

export default Signin;