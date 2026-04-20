import "../../Styles/Others.css";

const mobileNumber = "9715995914";

const OtherServices = () => {
  return (
    <section className='p-3 p-sm-5 common-bg'>
       <p className='title mb-4'>OTHER SERVICES</p>
       <div className='row mb-0 mb-lg-5'>
            <div className='col- col-lg-6'>
              <img src='/images/AboutUs/Others/Tailoring-Center.jpg' alt='No-Image' className='services-img w-100 rounded order-2 mb-4 mb-lg-0 border border-2 border-dark'/>
            </div>
            <div className='col- col-lg-6'>
                <p className='fw-bold fs-4 order-1'>TAILORING CENTRE</p>
                <p>A Tailoring Centre is a specialized establishment focused on providing custom clothing solutions, alterations, and sewing services. Our tailoring centre caters a variety of needs, ranging from stitching garments from scratch to modify existing clothing to achieve a perfect fit. They are ideal for customers who seek personalized outfits, unique designs, or adjustments to their wardrobe.</p>
                <a  href={`tel:${mobileNumber}`} className="btn btn-primary">CONTACT US</a>
                <p className='fw-semibold text-center fs-5 mt-3'>COURSES OFFERED</p>
                <div className="row">
                   <div className="col-sm-6">
                      <p className='offers-list'>Fashion Designing</p>
                      <p className='offers-list'>Aari Embroidery</p>
                      <p className='offers-list'>Screen Printing</p>
                   </div>
                   <div className="col-sm-6">
                      <p className='offers-list'>Tailoring Course</p>
                      <p className='offers-list'>Expert Design</p>
                      <p className='offers-list'>Boutique Management</p>
                   </div>
                </div>
            </div>
       </div>
       <div className='row pt-5'>
          <div className='col- col-lg-6 order-2 order-lg-1'>
            <p className='fw-bold fs-4'>OLD AGE HOME</p>
            <p>SHANTHI RANI Old Age Home, also known as retirement home or senior citizen home, is facilities designed to provide a safe, comfortable, and supportive environment for elderly individuals who may not have the resources or family support to live independently. This home aims to cater to the physical, emotional, and social needs of senior citizens by offering specialized care and services.</p>
            <a href={`tel:${mobileNumber}`} className="btn btn-primary">CONTACT US</a>
            <p className='fw-semibold text-center fs-5 mt-3'>FACILITIES OFFERED</p>
            <div className='row'>
              <div className='col-sm-6'>
                <p className='offers-list'>Accommodation</p>
                <p className='offers-list'>Nutritious Food</p>
                <p className='offers-list'>Healthcare Services</p>
              </div>
              <div className='col-sm-6'>
                <p className='offers-list'>Security and Safety</p>
                <p className='offers-list'>Social Integration</p>
                <p className='offers-list'>Emotional Support</p>
              </div>
            </div>
          </div>
          <div className='col- col-lg-6 order-1 order-lg-2'>
            <img src='/images/AboutUs/Others/Oldage-Home.jpg' alt='No-Image' className='services-img w-100 rounded mb-4 mb-lg-0 border border-2 border-dark'/>
          </div>
       </div>
    </section>
  )
}

export default OtherServices
