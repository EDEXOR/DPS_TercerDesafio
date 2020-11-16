import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

export default function ContainerLayout({ children }) {
  return (
    <>
      <Header />
      <Container
        className="d-flex flex-column align-items-center justify-content-center mt-4"
       
      >
        {children}
      </Container>
    </>
  );
}
