import { NavLink } from "react-router-dom"
import CareerForm from "./CareerForm/CareerForm"

const Careers = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <h1 className="title mb-4">Career Opportunities</h1>
       <h2 className="subTitle text-start">Join Our Dedicated Team of Educators!</h2>
       <p className="text-justify">Shanthi Rani Matric Hr. Sec. School is committed to providing quality education and fostering a nurturing learning environment. We are currently seeking passionate and experienced educators to join our team. If you are dedicated to shaping young minds and making a difference, we encourage you to apply.</p>
       {/* Current Openings */}
       <h2 className="subTitle text-start">Current Openings:</h2>
       <p className="text-justify">We are looking for experienced Post Graduate and Graduate teachers for the following subjects:</p>
       <ul>
          <li>Tamil</li>
          <li>English</li>
          <li>Mathematics</li>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Computer Science</li>
          <li>Female PET (Physical Education Teacher)</li>
       </ul>
       {/* Requirements */}
       <h2 className="subTitle text-start">Requirements:</h2>
       <ul>
          <li>Relevant Post Graduate or Graduate degree in the subject applied for.</li>
          <li>B.Ed. (Bachelor of Education) degree is mandatory.</li>
          <li>Excellent communication skills.</li>
          <li>Proven experience in teaching (preferred).</li>
       </ul>
       {/* WHy Join Us */}
       <h2 className="subTitle text-start">Why Join Us?</h2>
       <ul className="text-justify">
         <li>Opportunity to work in a supportive and collaborative environment.</li>
         <li>Competitive salary based on experience and skills.</li>
         <li>Chance to make a meaningful impact on students' lives.</li>
       </ul>
       {/* Walk-In Interview: */}
       <h2 className="subTitle text-start">Walk-In Interview:</h2>
       <p className="text-justify">We are conducting walk-in interviews for the above positions. Please bring your resume and relevant documents.</p>
       <p>For any inquiries, feel free to <NavLink to="/contact">contact us.</NavLink></p>
       {/* How to Apply: */}
       <h2 className="subTitle my-4 text-decoration-underline">APPLY NOW</h2>
       <div className="d-flex justify-content-center">
          <CareerForm/>
       </div>
    </section>
  )
}

export default Careers
