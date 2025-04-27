import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';





function AutoCloseExample({ direction }) {


  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  let id = 0;
  const arr = [ "new"
  ];

  const DropdownMenu = (() => {

    //create state to pass countries thorugh as an array
    const [countryDropdown, setCountryDropdown] = useState([]);

    //create useEffect hook to check state for any updates and remder dropdown item 
    useEffect(() => {
      setCountryDropdown(arr.map(element => <Dropdown.Item eventKey={id++}> {element} {id} </Dropdown.Item>))
      //id will show 2 although first element because we called it again
    }, [arr])

    //return list to render component
    return (
      <>
        {countryDropdown}
      </>);
  });

  return (
    <>
      <Dropdown className="d-inline mx-2" autoClose="outside" drop='end'>
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Add Countries +
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          {/* dropdownmenu component */}
          <DropdownMenu></DropdownMenu>
        </Dropdown.Menu>

      </Dropdown>
    </>
  );
}

export default AutoCloseExample;