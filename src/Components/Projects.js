export const Projects = () => {
  const Projectstyles = {
    color: "white",
  };

    return (
        <> 
     <div id="projects" className="projects py-5">
        <div className="container py-2 ">
          <div className="title">
            <p style={Projectstyles}>Projects</p>
          </div>
          <div className="row mb-3">
            <div className="col-md mb-3">
              <img src="assets/aa.png" alt="project a" width="100%" />
            </div>
            <div className="col-md">
              <div>
                <h2 style={Projectstyles}>Portfolio Website</h2>
                <div>
                  <a href="https://github.com/Milan-sys-stack/Milan-Portfolio-Dev-Day1" target="_blank"
                    ><i className="fa-brands fa-square-github"style={Projectstyles}></i
                  ></a>
                  <a href="" target="_blank"
                    ><i className="fa-brands fa-chrome"style={Projectstyles}></i
                  ></a>
                </div>
                <p className="mt-2"style={Projectstyles}>Tech used: HTML5, CSS3</p>
                <p style={Projectstyles}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deleniti enim, corporis repellat tenetur voluptate dolorum
                  eius id, temporibus maiores dolorem esse natus nobis sunt.
                  Dolorem vitae ipsa repudiandae quasi temporibus.
                </p>
              </div>
            </div>
          </div>


          <div className="row mb-5">

            <div className="col-md">
              <div>
                <h2 style={Projectstyles}>React calculator App</h2>
                <div>
                  <a href="https://github.com/Milan-sys-stack/React-Calculator-Project" target="_blank"
                    ><i className="fa-brands fa-square-github"style={Projectstyles}></i
                  ></a>
                  <a href="https://react-calculator-project-five.vercel.app/" target="_blank"
                    ><i className="fa-brands fa-chrome"style={Projectstyles}></i
                  ></a>
                </div>
                <p className="mt-2"style={Projectstyles}>Tech used: HTML5, CSS3, Bootstrap, Javascript and React</p>
                <p style={Projectstyles}>
                  Introducing the React Calculator - a powerful and intuitive web 
                  application built to streamline your mathematical tasks. This sleek 
                  and user-friendly calculator harnesses the capabilities of React, 
                  offering a seamless experience for all your calculations.
                  <br/>
                  With a clean and modern interface, the React Calculator allows you
                  to perform basic arithmetic operations like addition, subtraction,
                  multiplication, and division with ease. Its responsive design ensures
                  that you can access it from any device, be it a desktop computer, tablet,
                  or smartphone.
                  <br/>
                  Equipped with advanced features, the React Calculator also handles 
                  complex calculations, including scientific functions, percentages, 
                  and parentheses. Its intelligent history feature keeps track of your 
                  past computations, making it a breeze to review and reuse previous results.
                  <br/>
                  Whether you're a student, professional, or simply need a reliable tool for everyday 
                  calculations, the React Calculator is your go-to solution. Say goodbye to manual
                  computations and welcome the efficiency of this cutting-edge calculator. 
                  Try it out now and experience the power of React in action!

                </p>
              </div>
            </div>

            <div className="col-md mb-3">
              <img src="assets/Calculator.png" alt="project a" width="100%" />
            </div>


          </div>



          <div className="row mb-5">
            <div className="col-md mb-3">
              <img src="assets/aa.png" alt="project a" width="100%" />
            </div>
            <div className="col-md">
              <div>
                <h2 style={Projectstyles}>Portfolio Website</h2>
                <div>
                  <a href="https://github.com/Milan-sys-stack/Milan-Portfolio-Dev-Day1" target="_blank"
                    ><i className="fa-brands fa-square-github"style={Projectstyles}></i
                  ></a>
                  <a href="" target="_blank"
                    ><i className="fa-brands fa-chrome"style={Projectstyles}></i
                  ></a>
                </div>
                <p className="mt-2"style={Projectstyles}>Tech used: HTML5, CSS3</p>
                <p style={Projectstyles}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deleniti enim, corporis repellat tenetur voluptate dolorum
                  eius id, temporibus maiores dolorem esse natus nobis sunt.
                  Dolorem vitae ipsa repudiandae quasi temporibus.
                </p>
              </div>
            </div>
          </div>














          </div>

        </div>

</>
)
}