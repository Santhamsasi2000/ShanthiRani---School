import "../../Styles/About.css";

const Parents = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <p className='title mb-4'>PARENTS CO-OPERATION</p>
       <div className="row mb-4">
         <div className="col-md-6 mb-3 mb-md-0">
            <img className="rounded-3 w-100 parents-height" src="/images/AboutUs/Parents/Parent1.jpg" alt="No-Image"/>
         </div>
         <div className="col-md-6">
            <img className="rounded-3 w-100 parents-height" src="/images/AboutUs/Parents/Parent2.jpg" alt="No-Image"/>
         </div>
       </div>

       <>
       <p className="text-justify">Since education begins at home, a joint effort by parents and school alone will bring about the all-round development of their children. Parents are expected:</p>
       <ol className="lh-lg text-justify">
         <li>To inculcate in their children love for order and punctuality, a sense of cleanliness and friendliness, and self-discipline.</li>
         <li>To check regularly their Notebooks, School Diary, and Progress Report, and to take adequate measures for the progress of their children.</li>
         <li>Parents only have the rights to contact the School regarding any issue.</li>
         <li>To contact the Principal from time to time, to discuss with her matters connected with the conduct and academic progress of their children.</li>
         <li>To make necessary arrangements to have their children taken back home immediately after school hours.</li>
         <li>To supplement classroom teaching with a certain amount of guidance at home, especially through conversation in English.</li>
         <li>Not to contact teachers or students during class hours.</li>
         <li>Parents are requested to leave the children and go before the Assembly starts.</li>
         <li>No child suffering from any contagious or infectious disease will be allowed to attend the school.</li>
         <li>Parents or guardians are allowed to meet the class teacher of their children to enquire about their progress from 4:00 P.M. to 4:30 P.M. on working days.</li>
         <li>The School does not guarantee the success of a pupil’s studies unless his/her parents co-operate with school authority and do their part in forcing regularity and discipline.</li>
       </ol>
       </>
    </section>
  )
}

export default Parents
