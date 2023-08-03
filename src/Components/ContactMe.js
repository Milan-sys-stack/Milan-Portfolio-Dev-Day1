export const ContactMe = () => {
  const colourApp ={
    color: "white",
  };

    return (
        <div id="contact" className="container contact rounded-5 py-2">
          <div className="title">
            <span style={colourApp}>Contact Me</span>
          </div>
          <div className="row fa-3x">
            <div className="col d-flex justify-content-around pb-4">
              <a href="tel:0452477200"><i className="fa-solid fa-mobile" style={colourApp}></i></a>
              <a href="milanghimire656@gmail.com"
                ><i className="fa-solid fa-envelope"style={colourApp}></i
              ></a>
              <a href="https://www.facebook.com/milan.ghimire.161/"> <i className="fa-brands fa-facebook"style={colourApp}></i></a>
              <a href="https://www.linkedin.com/in/milan-ghimire-341976140/"> <i className="fa-brands fa-linkedin"style={colourApp}></i></a>
              <a href="https://github.com/Milan-sys-stack"><i className="fa-brands fa-square-github"style={colourApp}></i></a>
            </div>
          </div>
        </div>
    )
}