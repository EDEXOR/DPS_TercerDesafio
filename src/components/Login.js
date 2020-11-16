import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { googleSignUp } from '../firebase';
import ContainerLayout from './ContainerLayout';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  const GoogleAuth = () => {
    try {
      setError('');
      googleSignUp();
      setLoading(true);
      history.push('/');
    } catch {
      setError('Failed to creat an account with Google');
    }
  };

  return (
    <>
      <ContainerLayout>
        <div className="w-100" >
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar Sesion</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-100">
                  Iniciar Sesion
                </Button>
              </Form>
              <h4 className="w-100 text-center">O</h4>
              <Button
                disabled={loading}
                type="button"
                className="w-100"
                onClick={() => {
                  GoogleAuth();
                }}
              >
                Entrar con Google
              </Button>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
           <Link to="/signup">RESGISTRARSE</Link>
          </div>
        </div>
      </ContainerLayout>
    </>
  );
}
