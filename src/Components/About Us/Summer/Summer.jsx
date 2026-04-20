import { SummerData } from "./SummerData";
import "./Summer.css";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const mobile = "8508525062";
const imageSeo = "Shanthi Rani is Best School in Kallal,kalayarkovil,karaikudi,sivaganga";
const Summer = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
      <p className="title">Summer Camp</p>
      <p className="text-justify">
      2025 Kids Summer Camp hosted by Shanthi Rani Matriculation School from April 15 to May 15.
      Exciting activities include tailoring, computer training, communicative English, sports, abacus, handwriting, and drawing.
      Join a safe and engaging environment with special faculty ensuring the best experience for kids.
      Limited seats available—register before April 1!
      </p>
      <div className="d-flex gap-sm-5 gap-3 mb-4">
        <NavLink to="/contact" className="summer-btn">Register Now </NavLink>
        <a href={`tel:${mobile}`} className="summer-btn">Enquire Now</a>
      </div> 
       <p className="text-justify"><span className="fw-semibold">Note:</span> A Student can attend even all the courses. Kids must bring the things needed for the course.</p>
      {/* Activities */}
      <p className="subTitle text-uppercase">Activities Included</p>
      <div className="row gy-4">
      {
        SummerData.map(({id,image,title})=>(
            <div className="col-sm-6 col-lg-4" key={id}>
               <div className="border border-1 border-primary p-1">
                 <LazyLoadImage src={image} alt={imageSeo} className="w-100 mb-2"
                 effect="blur"
                 threshold={200}/>
                 <p className="subTitle">{title}</p>
               </div>
            </div>
        ))
       
      }
      </div>
    </section>
  );
};

export default Summer;
