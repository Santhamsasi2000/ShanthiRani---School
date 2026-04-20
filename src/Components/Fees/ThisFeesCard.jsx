import React from 'react';
import { ThisFeesData } from '../../Data/FeesData';

const ThisFeesCard = () => {
  return (
    <>
     {
         ThisFeesData.map(({id,std,term1,term2,term3,annual})=>(
            <>
            <tr key={id}>
              <td className='fees-font fw-semibold text-uppercase p-3'>{std}</td>
              <td className='fees-font p-3'>{term1}</td>
              <td className='fees-font p-3'>{term2}</td>
              <td className='fees-font p-3'>{term3}</td>
              <td className='fees-font p-3'>{annual}</td>
            </tr>
            </>
          ))
     }
    </>
  )
}

export default ThisFeesCard
