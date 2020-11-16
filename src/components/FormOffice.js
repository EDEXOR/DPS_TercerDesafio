import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
export default function FormOffice(props) {
  const initialStateValues = {
    name: '',
    earnings: '',
    employees: '',
    state: '',
  };

  const [office, setOffice] = useState({ initialStateValues });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditOffice(office);
    setOffice({ ...initialStateValues });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOffice({ ...office, [name]: value });
  };

  return (
    
    <div className=" jumbotron">
      <Form onSubmit={handleSubmit}>
        <Form.Group id="name">
          <Form.Label>Nombre de la sucursal</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="text"
            name="name"
            value={office.name}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group id="earnings">
          <Form.Label>Ganancias</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="number"
            name="earnings"
            value={office.earnings}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group id="employees">
          <Form.Label>Empleados</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="number"
            name="employees"
            value={office.employees}
            required
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="w-100">
          Rgistrar
        </Button>
      </Form>
      </div>
    
  );
}
