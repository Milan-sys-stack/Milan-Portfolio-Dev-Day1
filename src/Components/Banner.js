import React from 'react';

export const Banner = () => {
  const Bannerstyles = {
    color: "white",
  };

  return (
    <div className="Banner-container">
      <div className="row">
        <div className="icons">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div><i className="fa-solid fa-user-graduate" style={Bannerstyles} ></i><p style={Bannerstyles}>IT Graduate</p></div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div><i className="fa-solid fa-list" style={Bannerstyles}></i> <p style={Bannerstyles}>5+ Projects Completed</p></div>
          </div>
          <div className="col-md-4  d-flex justify-content-center align-items-center">
            <div><i className="fa-solid fa-award" style={Bannerstyles}></i> <p style={Bannerstyles}>1 Year Experience</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};
