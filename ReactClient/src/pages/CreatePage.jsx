
import CreateChart from '../components/countryform.jsx'
import CountryDropdown from '../components/dropdown.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//add items as a listbox
function Test() {
  const countryArr = ["England", "Italy", "bangladesh","jamaica"];
  return countryArr;
}

 function CreateChartPage() {
  return (
    <Container>
      <Row>
        {/* passing array into createchart via country prop */}
      <CreateChart country={Test()} ></CreateChart>
      </Row>
    </Container>
  );
}

export default CreateChartPage;