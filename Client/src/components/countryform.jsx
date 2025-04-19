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
      
      <Row className="m-4">
        <Col>
          <Form.Group className="m-1" as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Chart Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="e.g Population of Europe"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> 
        </Col>
          </Row>

      <Row className="m-4">
        <Col>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>City (optional) </Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="m-4">
        <Col>
          <Form.Group as={Col} md="5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Additional Information:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Col>
      </Row>

      <Row className="m-4">
        <Col>
          {/* Add Dropdown Menu here */}
        </Col>
      </Row>

      <Row className="m-4">
        <Col>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <strong>Country List</strong>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">Pakistan</ListGroup.Item>
              <ListGroup.Item as="li">Sri Lanka</ListGroup.Item>
            </ListGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row className='m-4'>
        <Col>
          <Button size="lg" type="submit">Submit form</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormExample;