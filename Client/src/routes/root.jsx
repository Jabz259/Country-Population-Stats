import NavBar from '../components/navbar.jsx'
//import CountryDropdown from '../components/dropdown.jsx'
import { Outlet, Link} from "react-router-dom";

function testRoute() {
  return (
              <Link to={`create`}></Link>
            
  );

}


export default function Root() {
  return (
    <>
    <div id="sidebar">
        {/* other elements */}

       <NavBar>
       </NavBar>
        <Outlet />

       
       <input type="submit" onClick={testRoute} />
          
            
            
          
       

        {/* other elements */}
      </div>



    </>
  );
}