export const MenuItem  = ({href, label}) => {
    const Navitem = {
    color: "black",  
      };
return ( 
    <li className="nav-item me-3">
       <a className="nav-link" style={Navitem} aria-current="page" href={href}>
           {label}
       </a>
   </li>
    )
}