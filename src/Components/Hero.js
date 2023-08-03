import React from 'react';
import { MenuItem } from './MenuItem.js';
import {ResumeDownloadButton} from './ResumeDownloadButton.js';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {



  return (
    <>


        <div className="hero mt-5 py-5">

        {/* This is for image */}
        <div className="container">
          <div className="row mt-1 py-3">
            <div className="col-md-6 col-12 custom-row">
              <img
                src="assets/my.png"
                width="80%"
                alt=""
                className="img-fluid"
              />
            </div>

            {/* This is for paragraph */}
            <div className="col-md-6 col-12 order-md-2 font-weight-bold display-6 justify-content-center">
              <TypeAnimation
                style={{ whiteSpace: 'pre-line', height: '255px', display: 'block' }}
                sequence={[
                  `
                  Hi 👋
                  It's me Milan,
                  I am a Full Stack Developer.`,
                  1000,
                  ``,
                ]}
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="row mt-3 py-3">
            <div className="col-md-12 text-center ">

            <ResumeDownloadButton/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
