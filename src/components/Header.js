import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'


export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>

   
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer >
        <Link to='/'>
        <MDBNavbarBrand>Brand</MDBNavbarBrand>
        </Link>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            <Link to='/'>
            
            <MDBNavbarItem>
              {/* borrar los href */}
              <MDBNavbarLink>
            <i className="fa-solid fa-house mx-1"></i>
                
                HOME</MDBNavbarLink>
            </MDBNavbarItem>
            </Link>


            <Link to='/cart'>
            <MDBNavbarItem>
              <MDBNavbarLink   tabIndex={-1} aria-disabled='true'>
              <i className="fa-solid fa-cart-flatbed mx-1"></i>
                CART
              </MDBNavbarLink>
              
            </MDBNavbarItem>
            </Link>


            <Link to='/login'>
            <MDBNavbarItem>
              <MDBNavbarLink  tabIndex={-1} aria-disabled='true'>
              <i className="fa-solid fa-right-to-bracket mx-1"></i>
                LOGIN
              </MDBNavbarLink>
            </MDBNavbarItem>
            </Link>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}