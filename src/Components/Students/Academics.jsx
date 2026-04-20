import React from 'react'
import { AcademicsData } from '../../Data/AcademicsData'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Academics = () => {
  return (
    <section className='p-3 p-sm-5 common-bg'>
      <p className='title mb-4'>ACADEMICS</p>
      {
        AcademicsData.map(({id,image,title,standard,desc})=>(
            <div className='row mb-5' key={id}>
                <div className='col- col-lg-6'>
                  <LazyLoadImage src={image} alt={title} className='block-image w-100 rounded-2 border border-1 border-dark' effect='blur' threshold={200}/>
                </div>
                <div className='col- col-lg-6'>
                    <p className='subTitle text-start mt-2 mt-md-0'>{title}</p>
                    <p className='fw-semibold'>{standard}</p>
                    <p className='lh-lg' style={{textAlign:"justify"}}>{desc}</p>
                </div>
            </div>
        ))
      }
    </section>
  )
}

export default Academics
