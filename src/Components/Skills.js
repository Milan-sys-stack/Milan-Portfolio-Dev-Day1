
export const Skills = () => {

  const Reactstyles = {
    color: "#61dafb",
  };
  const Nodestyles = {
    color: "#215732",
  };



    return (
        <> 
         <div id="skills" className="container py-3 mt-5 mb-5">
         <div className="title">
              <span>Skills</span>
            </div>


            <div className="row">
            <div className="icons">

          <div className="col-md-3">
              <div><i className="fa-brands fa-html5 text-danger fa-beat"></i> HTML</div>
              <div><i className="fa-brands fa-css3-alt text-primary fa-beat "></i> CSS</div>
              </div>
              <div className="col-md-3">
              <div><i className="fa-brands fa-figma text-info fa-beat"></i> Figma</div>
              <div><i className="fa-brands fa-square-js text-warning fa-beat "></i> JavaScript</div>
              </div>
              <div className="col-md-3">
              <div><i className="fa-brands fa-react text-info fa-beat"></i>React</div>
              <div><i className="fa-brands fa-node fa-beat" style={Nodestyles}></i>NodeJS</div>
              </div>
              <div className="col-md-3">
              <div><i className="fa fa-database fa-beat"></i>MongoDb</div>
              <div><i className="fa-brands fa-trello fa-beat "></i> Trello</div>


              </div>



            </div>
          </div>
        </div>


         </>
    )
}