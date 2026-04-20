import '../../Styles/Menus.css';
import { NavLink } from 'react-router-dom';

const Menus = () => {
  return (
    <section className='menus p-2 p-md-4  d-flex gap-md-5 gap-4 justify-content-center flex-wrap'>
      <NavLink to="/" className="navlink px-sm-4 py-sm-1">HOME</NavLink>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ADMISSIONS
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/admissionprocess" className="dropdown-item">Admission Process</NavLink></li>
            <li><NavLink to="/admissionform" className="dropdown-item">Admission Enquiry Form</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT US
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/events" className="dropdown-item">EVENTS</NavLink></li>
            <li><NavLink to="/about" className="dropdown-item">OUR ABOUT</NavLink></li>
            <li><NavLink to="/discipline" className="dropdown-item">DISCIPLINARY INSTRUCTIONS</NavLink></li>
            <li><NavLink to="/parents" className="dropdown-item">PARENTS CO-OPERATION</NavLink></li>
            <li><NavLink to="/rules" className="dropdown-item">RULES AND REGULATIONS</NavLink></li>
            <li><NavLink to="/summer-camp" className="dropdown-item">SUMMER CAMP</NavLink></li>
            <li><NavLink to="/otherservices" className="dropdown-item">OTHER SERVICES</NavLink></li>
            <li><NavLink to="/careers" className="dropdown-item">CAREERS</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            STUDENTS
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/annual-day" className="dropdown-item">ANNUAL DAY</NavLink></li>
            <li><NavLink to="/academics" className="dropdown-item">ACADEMICS</NavLink></li>
            <li><NavLink to="/toppers" className="dropdown-item">TOPPERS</NavLink></li>
            <li><NavLink to="/facilities" className="dropdown-item">FACILITIES</NavLink></li>
            <li><NavLink to="/house" className="dropdown-item">HOUSE</NavLink></li>
            <li><NavLink to="/syallbus" className="dropdown-item">SYALLBUS</NavLink></li>
            <li><NavLink to="/extracurricular" className="dropdown-item">EXTRA CURRICULAR</NavLink></li>
            <li><NavLink to="/questions" className="dropdown-item">PUBLIC QUESTION</NavLink></li>
          </ul>
      </div>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FEES
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/fees24-25" className="dropdown-item">2024-2025</NavLink></li>
            <li><NavLink to="/fees25-26" className="dropdown-item">2025-2026</NavLink></li>
          </ul>
      </div>
      <NavLink to="/contact" className="navlink px-sm-4 py-sm-1">CONTACT US</NavLink>
    </section>
  )
}
export default Menus
