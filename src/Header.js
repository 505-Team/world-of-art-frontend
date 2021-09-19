import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from "@auth0/auth0-react";
class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Painting</Navbar.Brand>
        {
          isAuthenticated && (
            <>
            <Link to="/">Home</Link>
              <LogoutButton />
            </>
          )
        }
      </Navbar>
    );
  }
}

export default withAuth0(Header);