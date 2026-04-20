import "./ExtraCurricular.css";
import { ExtraData } from "./ExtraData";
const ExtraCurricular = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
       <p className="title">ExtraCurricular Activities</p>
       <p className="subTitle">A Symphony of Skills and Creativity</p>
       <div className="row gy-4 gy-sm-5">
         {
            ExtraData.map(({id,image,title})=>(
              <div className='col-md-6 p-0' key={id}>
                <div className="border extra-border border-4 m-4">
                  <img className="w-100" src={image} alt="No-Image"/>
                  <div className="extra-title p-2">{title}</div>
                </div>
             </div>
            ))
         }
       </div>
    </section>
  )
}

export default ExtraCurricular
