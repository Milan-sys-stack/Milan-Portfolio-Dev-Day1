// ResumeDownloadButton.js

import React from 'react';

export const ResumeDownloadButton = () => {
  const downloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '#public/MilanResume.pdf'; // Path to the resume file in the public folder
    downloadLink.download = 'MilanResume.pdf'; // Set the desired filename for download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <a><button className="btn btn-danger " onClick={downloadResume}>
        <div className="fa-solid fa-download"></div> Resume
    </button></a>

  );
};



