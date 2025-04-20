import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import CountryDropdown from './dropdown.jsx'
import ListGroup from 'react-bootstrap/ListGroup';
import { data } from 'react-router-dom';



//add items as a listbox
// function Test() {
//   const countryArr = ["England", "Japan", "Indonesia"];
//   const listItems = countryArr.map(country => <ListGroup.Item as="li"> {country} </ListGroup.Item>);
 
// //   let listItems = [];
// //  for (const i in countryArr) {
// //requires a key
// //   listItems.push(<ListGroup.Item as="li" key={i}> {countryArr[i]} </ListGroup.Item>);
// //  }

//   return listItems;
// }



function CountryList(props) {
  // props is the pool
  //in our pool of props we added a characteristic called CountryListData in the JSX component
  //and CountryListData we passed props.country from our FormsComponent
  const listItems = props.CountryListData.map(country => <ListGroup.Item as="li"> {country} </ListGroup.Item>);
  return listItems;
}


function ChartNameField() {
  return(
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
  );
}

function CityNameField() {
  return(<Form.Group as={Col} md="4" controlId="validationCustom03">
    <Form.Label>City (optional) </Form.Label>
    <Form.Control type="text" placeholder="City" required />
    <Form.Control.Feedback type="invalid">
      Please provide a valid city.
    </Form.Control.Feedback>
  </Form.Group>);

}

function ChartMoreInfo() {
  return(
  <Form.Group as={Col} md="5" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Additional Information:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>);
}

function FormComponents(props) {


  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  //THIS IS THE WORKING FUNCTION
  // function CountryList() {
  //   const listItems = listBoxCountry.country.map(country => <ListGroup.Item as="li"> {country} </ListGroup.Item>);
  //   // const listItems = <ListGroup.Item as="li"> {listBoxCountry.country} </ListGroup.Item>
  //   return listItems;
  // }
 
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
      <Row className="m-4">
        <Col>
           <ChartNameField></ChartNameField>
        </Col>
          </Row>

      <Row className="m-4">
        <Col>
          <CityNameField></CityNameField>
        </Col>
      </Row>

      <Row className="m-4">
        <Col>
          <ChartMoreInfo></ChartMoreInfo>
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
                {/* passing one of the props to countryList function which will create our list box of countries */}
                <CountryList CountryListData={props.country} />  
                {/*  */}
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

export default FormComponents;