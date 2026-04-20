import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import Direction from "./Direction";
import Timings from "./Timings";

const Location = () => {
  return (
    <section className='contact mb-3 mb-sm-5'>
     <div className="">
          <p className="subTitle text-start fs-5 mb-0">SHANTHI RANI</p>
          <p className="subTitle text-start fs-6">Higher Secondary School</p>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="fs-2 border border-0 text-dark bg-dark bg-opacity-10 p-3 rounded"><SlLocationPin /></i>
            <a href="https://www.google.com/maps/dir//XMJ8%2BGGX+Shanthi+Rani+Matric+Hr+Sec+School,+Kallal,+Tamil+Nadu+630305/@9.9813563,78.6637704,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3b005f5226f2ccfb:0x67377686d48a4335!2m2!1d78.6663527!2d9.9813513!3e0?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" 
          rel="noopener noreferrer" className="email text-dark text-decoration-none lh-lg"><span className="">Daughters of Charity of St.Vincent de Paul, Kurunthampattu, Kallal, Sivaganga - 630305</span></a>
          </div>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="fs-2 border border-0 text-dark bg-dark bg-opacity-10 p-3 rounded"><IoMailOpenOutline /></i>
            <a href={`mailto:shanthiranimatric@gmail.com`} className="email text-dark text-decoration-none">shanthiranimatric@gmail.com</a>
          </div>
           <div className="d-flex gap-3 align-items-center mb-4">
            <i className="fs-3 border border-0 text-dark bg-dark bg-opacity-10 p-3 rounded"><LuPhoneCall /></i>
            <div>
              <div className="mb-1">
                <a href={`tel:8309393118`} className="email text-dark text-decoration-none">8309393118,</a>
                <a href={`tel:04565284919`} className="email ms-2 text-dark text-decoration-none">04565-284919</a>
              </div>
              <div>
                <span className="text-mobile">For Admissions:</span>
                <a href={`tel:6382174912`} className=" email ms-2 text-dark text-decoration-none">6382174912</a>
              </div>
            </div>
          </div>
     </div>
    </section>
  )
}

export default Location
