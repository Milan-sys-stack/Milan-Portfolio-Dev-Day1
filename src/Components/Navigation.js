import React from 'react';
import { Navbar, Nav, container } from 'react-bootstrap';
import { MenuItem } from './MenuItem.js';


export const Navigation = () => {
    const menuItems = [
        {
          href: '#skills',
          label: 'Skills',
        },
        {
          href: '#projects',
          label: 'Projects',
        },
        {
          href: '#about-me',
          label: 'About Me',
        },
        {
          href: '#contact',
          label: 'Contact',
        },
      ];
      const customStyle = {
        color: '#8C52FF',
        fontWeight: 'bold',
        fontSize: '40px',
      };

    return (
        <> 
            <Navbar expand="md" bg="white" fixed="top">
      <div className="container container-fluid mb-3">

      <a className="navbar-brand" href="#" style={customStyle}>
Milan G.
</a>
        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            {menuItems.map((item) => (
              <MenuItem href={item.href} label={item.label} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

 </>
    )
}