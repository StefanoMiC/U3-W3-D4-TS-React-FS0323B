import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckBox] = useState(false);

  const navigate = useNavigate();

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(firstName, lastName, checkbox);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                value={firstName}
                // onChange={e => setFirstName(e.target.value)}
                onChange={handleFirstNameChange}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo cognome"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Check
                type="checkbox"
                label="Check me out"
                placeholder="Inserisci il tuo nome"
                checked={checkbox}
                onChange={e => setCheckBox(e.target.checked)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
