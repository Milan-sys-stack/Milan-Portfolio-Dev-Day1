import {MenuItem} from './MenuItem.js';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
    const menuItems = [
        {
            href:'#skills',
            label:'Skills'
        },
        {
            href:'#projects',
            label:'Projects'
        },
        {
            href:'#about-me',
            label:'About Me'
        },
        {
            href:'#contact',
            label:'Contact'
        },
        {
            href:'#location',
            label:'Location'
        },
    ];
    const customStyle= {
      color : '#8C52FF',
      fontWeight : 'bold',
      fontSize: '40px',

    };


    return (
        <> 
         <div className="hero">
        <nav className="navbar navbar-expand-md bg-none">
          <div className="container">
          <a className="navbar-brand" href="#" style={customStyle}>Milan G.</a>


            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            
            >
              <span className="navbar-toggler-icon"></span>
            </button>


            
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {menuItems.map((item) =>  <MenuItem href={item.href} label={item.label}/> )}
              </ul>
            </div>
          </div>
        </nav>



        <div className="container">
          <div className="row mt-5 py-3">
            <div className="col-md-6 text-center order-md-2">
              <img src="assets/my.png" width="80%" alt="" />
            </div>
            
            <TypeAnimation
              style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
              sequence={[
              
            `
              hi 👋 i'm 
              
             
                I love codiong and solving problems with code.
              `,
              1000,
              ``,
              ]}
              repeat = {Infinity}
              />
              <button className="btn btn-danger">Download Resume</button>
            </div>
          </div>
        </div>
      
         </>
    )
}