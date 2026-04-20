import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../Styles/Header.css";
import "../../Styles/Home.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className='common-bg d-flex align-items-center justify-content-around'>
      <div className='d-flex align-items-center justify-content-center gap-2'>
        <LazyLoadImage className="header" src='/images/Home/Logo.webp' alt="Shanthi Rani, Best School in Kallal, Kalayarkovil" effect="blur" threshold={200}/>
        <div className='mt-2'>
          <p className='mb-0 header-title'>SHANTHI RANI</p>
          <p className='mb-1 subTitle fs-6 text-start fw-semibold'>Matric Higher Secondary School</p>
          <p>Kallal, Sivaganga - 630305</p>
        </div>
      </div>
      <div className='d-none d-sm-flex flex-column flex-md-row gap-3 gap-md-2 gap-lg-5'>
        <NavLink to="/admissionprocess" className='btn-common px-3 py-2 fw-semibold rounded-2 border-0 text-decoration-none text-center'>For Admission</NavLink>
        <a href="https://wa.me/916382174912" target="_blank" rel="noopener noreferrer" className="btn-common border-0 px-3 py-2  text-decoration-none rounded-2 fw-semibold text-center">For Enquiry</a>
      </div>
    </section>
  )
}

export default Header;
