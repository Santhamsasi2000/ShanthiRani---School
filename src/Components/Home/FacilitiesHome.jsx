import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
const FacilitiesHome = () => {
  return (
    <section className='p-lg-0 py-lg-5 row gx-0 align-items-center justify-content-center gap-4 mb-4 mb-sm-0'>
    <div className='col-12 col-lg-5 text-center'>
       <LazyLoadImage className="rounded w-100 common-border" src='/images/Home/Facilities-Home.webp' alt='All Facilities School in Kalayarkovil, kallal' effect="blur" threshold={200}/>
    </div>
    <div className='col-12 col-lg-6'>
      <p className='subTitle text-start'>The Importance of All-Round Facilities in Education</p>
      <p className="text-justify lh-lg">Comprehensive facilities play a crucial role in creating an ideal learning environment. From smart classrooms and playgrounds to libraries and labs, these resources enhance academic performance, promote physical and mental well-being, and support overall student development. Schools with modern facilities ensure students receive a well-rounded education, preparing them for a brighter future.</p>
      <NavLink to="/facilities" className='btn btn-primary px-4 py-2 shadow-sm'>SEE OUR ALL FACILITIES</NavLink>
    </div>
 </section>
  )
}

export default FacilitiesHome;
