import * as React from 'react';
import Container from '@mui/material/Container';
import Header from "../src/components/Header/Header";
import ServicesList from "../src/components/ServicesList";
import LoginForm from "../src/components/Login/LoginForm";

export default function Home() {
  return (
      <>
          <Header></Header>
          <Container maxWidth="lg">
              <ServicesList></ServicesList>
              <LoginForm></LoginForm>
          </Container>
      </>
  );
}
