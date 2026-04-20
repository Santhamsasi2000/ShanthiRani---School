import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../../Styles/Students.css";
import { ToppersList } from "./ToppersList";

const SchoolToppers = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <p className="text-center text-uppercase title fs-3 fw-bold text-decoration-underline">ACHIEVERS of 2024</p>
      {
        ToppersList.map(({id,standard,image})=>(
          <div className="d-flex flex-column justify-content-center align-items-center mb-5" key={id}>
            <p className="subTitle">{standard}</p> 
            <LazyLoadImage src={image} className='toppers-img img-fluid' alt='No-Image' effect="blur" threshold={200}/>
          </div>
        ))
      }
       
      
    </section>
  )
}

export default SchoolToppers
