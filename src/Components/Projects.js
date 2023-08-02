export const Projects = () => {
  const Projectstyles = {
    color: "white",
  };

    return (
        <> 
     <div id="projects" className="projects">
        <div className="container">
          <div className="title">
            <span><p style={Projectstyles}>Projects</p></span>
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