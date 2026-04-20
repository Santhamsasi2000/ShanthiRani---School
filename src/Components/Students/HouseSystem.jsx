import { LazyLoadImage } from "react-lazy-load-image-component"
import { HouseSystemData } from "../../Data/HouseSystemData"

const HouseSystem = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <div className="row mb-5">
       <div className="col-xl-6 order-2 order-xl-1">
            <p className='d-xl-block d-none title mb-3'>HOUSE SYSTEM</p>
            <p className="lh-lg text-justify">All school activities are organized by House system to build team spirit, foster unity, sports activity and instill a sense of responsibility among all students. Students are divided into 4 Houses. Each House will be guided by a teacher. Each house is named after a Vincentian Saint.</p>
       </div>
      <div className="col-xl-6 order-1 order-xl-2 mb-3 mb-xl-0">
          <p className='d-block d-xl-none title mb-3'>HOUSE SYSTEM</p>
          <LazyLoadImage className="w-100 rounded-3" src="/images/Students/House/Common.webp" alt="Shanthi Rani is Best School in Kalayarkovil" effect="blur" threshold={200}/>
      </div>
       </div>
       <div className="row gy-4">
          {
            HouseSystemData.map(({id,image,houseName,houseColor})=>(
              <div className="col-md-6" key={id}>
                <p className="subTitle mb-1">{houseName} ({houseColor})</p>
                <LazyLoadImage src={image} alt="Best School with House Activities in Kallal" className="w-100 rounded-3" effect="blur" threshold={200}/>
              </div>
            ))
          }
       </div>
    </section>
  )
}

export default HouseSystem
