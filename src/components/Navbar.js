import { Link } from "react-router-dom"
let Navbar = () =>{
    return(
        <div>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/Home" className="nav-link active" aria-current="page">Home</Link>

          
        </li>
        <li className="nav-item">
        <Link to="/About" className="nav-link active" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/Company" className="nav-link active" aria-current="page">Company</Link>
        </li>

        <li className="nav-item">
        <Link to="/Header" className="nav-link active" aria-current="page">Header</Link>
        </li>

        <li className="nav-item">
        <Link to="/Footer" className="nav-link active" aria-current="page">Footer</Link>
        </li>
       
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


        </div>
    )
}
export default Navbar;