import React, { useState } from 'react';
import { Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import ContainerLayout from './ContainerLayout';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <ContainerLayout>
        <div className=" jumbotron" >
          <Card>
            <Card.Body>
              <h1 className="display-4">Bienvenido a | LA TIENDA SA. DE CV. |</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <h4>Usuario:</h4> {currentUser.email}
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button className="btn btn-warning btn-lg" variant="link" onClick={handleLogout}>
              Cerrar Sesion
            </Button>
          </div>
        </div>
      </ContainerLayout>
    </>
  );
}
