import React from 'react';
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
        {
          href: '#location',
          label: 'Location',
        },
    
      ];
      const customStyle = {
        color: '#8C52FF',
        fontWeight: 'bold',
        fontSize: '40px',
      };

    return (
        <> 
                <nav className="navbar navbar-expand-md bg-white fixed-top">
          <div className="container container-fluid mb-4">
            <a className="navbar-brand" href="#" style={customStyle}>
              Milan G.
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                {menuItems.map((item) => (
                  <MenuItem href={item.href} label={item.label} />
                ))}
              </ul>
            </div>
          </div>
        </nav>
 </>
    )
}