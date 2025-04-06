import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import CountryDropdown from '../components/dropdown.jsx'
import ListGroup from 'react-bootstrap/ListGroup';



function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Chart Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="e.g Population of Europe"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City (optional) </Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group as={Col} md="3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Additional Information:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Row>
      <Form.Group as={Col} md="2" controlId="validationCustom04">
        {/* Dropdown MENU component  */}
        <CountryDropdown direction={'end'}></CountryDropdown>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">Bangladesh</ListGroup.Item>
              <ListGroup.Item as="li">Pakistan</ListGroup.Item>
              <ListGroup.Item as="li">Sri Lanka</ListGroup.Item>
            </ListGroup>
      </Form.Group>
      </Row>



      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;