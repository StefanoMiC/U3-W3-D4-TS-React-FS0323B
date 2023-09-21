import { Container, Row, Col, Button, Alert } from "react-bootstrap";

const BootstrapComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Alert variant="warning">We are on a bootstrap component</Alert>
          <h1 className="bg-dark text-white">Title</h1>
          <Button variant="danger" size="sm">
            sm danger button
          </Button>
          <Button variant="danger">lg danger button</Button>
          <Button variant="danger" size="lg">
            lg danger button
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BootstrapComponent;
