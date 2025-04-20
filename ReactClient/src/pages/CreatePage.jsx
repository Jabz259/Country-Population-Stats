
import CreateChart from '../components/countryform.jsx'
import CountryDropdown from '../components/dropdown.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutSizingExample() {
  return (
    <Container>
      <Row>
        {/* <Col className='m-4 p-0' xs={8}>  */}
      <CreateChart></CreateChart>
      </Row>
    </Container>
  );
}

export default AutoLayoutSizingExample;