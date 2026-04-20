import { LazyLoadImage } from "react-lazy-load-image-component";

const videoDescription = 
{
    title: "Why Choose Shanthi Rani School for Your Child's Future?",
    content: "Experience the best in education with our smart classrooms, designed to provide an interactive and engaging learning environment for 1st to 5th standard students. While nearby schools lack smart teaching facilities, we ensure a strong foundation for young learners through innovative technology. Recognized as the best school in Kallal, Kalayarkovil, Karaikudi, and Sivaganga, we prioritize modern education to build a brighter future for your child.",
};

const SmartClass = () => {
  return (
    <section className='p-lg-0 py-lg-5 row justify-content-center gap-4 mb-5 mb-sm-0 gx-0'>
      <div className='col- col-lg-5 order-2 order-lg-1'>
        <p className='subTitle text-start'>{videoDescription.title}</p>
        <p className='lh-lg text-justify'>
          {videoDescription.content}
        </p>
        <a className="btn btn-primary px-4 py-2 shadow-sm" href="https://leadschool.in/" target="_blank" rel="noopener noreferrer"aria-label="Learn more about Sapience Publications">LEARN MORE</a>
      </div>
      <div className='col- col-lg-6 order-1 order-lg-2 text-center'>
         <LazyLoadImage className="rounded w-100 common-border" src='/images/Home/Smart-Class.webp' alt='Best Smart Classroom School is Shanthi Rani' effect="blur" threshold={200}/>
      </div>
    </section>
  )
}

export default SmartClass;
