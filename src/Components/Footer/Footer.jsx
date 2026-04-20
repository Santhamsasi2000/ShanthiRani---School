import SocialMedia from './SocialMedia';
import "../../Styles/Footer.css";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer mt-0 p-3 p-sm-5 row gy-4 gy-sm-5 gx-0 justify-content-between'>
       <div className='col- col-sm-6 col-lg-3'>
        <p className='fw-bold fs-4 mb-1 mt-2 text-decoration-underline'>FOLLOW US</p>
        <p className='fw-semibold fs-6 mt-3'>Get Involved with SHANTHI RANI School Online</p>
        <SocialMedia/>
       </div>
       <div className='col-6 col-lg-4 d-none d-sm-flex flex-column align-items-end align-items-center'>
            <div className='fw-semibold fs-5 d-flex flex-column align-items-start'>
              <p className='fw-bold fs-4 text-decoration-underline'>Quick Links</p>
              <NavLink className="menu-Links" to="/admissionprocess">Admission Process</NavLink>
              <NavLink className="menu-Links" to="/admissionform">Online Admission Form</NavLink>
              <NavLink className="menu-Links" to="/fees24-25">Fees Structure</NavLink>
              <NavLink className="menu-Links" to="/facilities">Facilities</NavLink>
              <NavLink className="menu-Links" to="/academics">Academics</NavLink>
              <NavLink className="menu-Links" to="/toppers">Achievers of Public Exams</NavLink>
            </div>
       </div>
       <div className='col- col-lg-5 col-xl-4'>
         <p className='fw-bold fs-4 text-decoration-underline d-none d-sm-block'>Contact Us</p>
         <div className="mb-2 d-flex gap-3 align-items-center">
          <i className="fs-1"><SlLocationPin /></i>
          <a href="https://www.google.com/maps/dir//XMJ8%2BGGX+Shanthi+Rani+Matric+Hr+Sec+School,+Kallal,+Tamil+Nadu+630305/@9.9813563,78.6637704,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3b005f5226f2ccfb:0x67377686d48a4335!2m2!1d78.6663527!2d9.9813513!3e0?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" 
          rel="noopener noreferrer" className="contact-links lh-lg fw-semibold"><span className="">Daughters of Charity of St.Vincent de Paul, Kurunthampattu, Kallal, Sivaganga - 630305</span></a>
         </div>
         <div className="mb-3 d-flex gap-3 align-items-center">
              <i className="fs-1"><IoMailOpenOutline /></i>
              <a href={`mailto:shanthiranimatric@gmail.com`} className="contact-links mt-1 fw-semibold">shanthiranimatric@gmail.com</a>
         </div>
         <div className="d-flex gap-3 align-items-center">
              <i className="fs-2"><LuPhoneCall /></i>
              <a  href={`tel:6392174912`} className="contact-links ms-sm-2 fw-semibold">6382174912</a>
              <a  href={`tel:04565284919`} className="contact-links fw-semibold">04565284919</a>
         </div>
       </div>
       <p className='text-start text-sm-center mt-5'>Developed By
         <a href='https://www.sasikumar.online/' target="_blank" 
          rel="noopener noreferrer" className='fw-bold ms-2'>Sasikumar.online</a></p>
    </section>
  ) 
}

export default Footer
