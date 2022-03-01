import React from "react";
import {
  FormButton,
  FormContent,
  FormInput,
  Container,
  FormWrap,
  FormH1,
  Form,
  FormLabel,
  Icon,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Lasse</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlfor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlfor="for">Password</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
