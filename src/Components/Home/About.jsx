import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <section className='px-lg-0 py-lg-5 row align-items-center justify-content-center gap-4 gx-0 mb-5 mb-sm-0'>
       <div className='col-12 col-lg-5 text-center'>
          <LazyLoadImage className="rounded w-100 common-border" src='/images/Home/About.webp' alt='Near school in Kallal,Kalayarkovil' effect="blur" threshold={200}/>
       </div>
       <div className='col-12 col-lg-6'>
         <p className='subTitle text-start mb-2'>"Knowledge is to serve"</p>
         <p className="lh-lg text-justify">Shanthi Rani firmly believes in making our School one of the best schools of our locality, by providing 360 degree education to our students through best –in- class academic facilities and churning out citizens who are inspiring leaders with humane and spiritual touch. Our Annual Report articulates and demonstrates the dynamic nature of our school, our commitment to excellence and our relentless pursuit of achieving our best. Established in 1997, Shanthi Rani Matric Hr. Sec. School, Kallal has been preparing our children for the future for the last 27 years.</p>
       </div>
    </section>
  )
}

export default About;