import React from 'react';
import { NextFeesData } from '../../Data/FeesData';

const NextFeesCard = () => {
  return (
    <>
     {
         NextFeesData.map(({id,std,term1,term2,term3,annual})=>(
            <>
            <tr key={id}>
              <td className='text-uppercase fw-bold p-3 fees-font'>{std}</td>
              <td className='p-3 fees-font'>{term1}</td>
              <td className='p-3 fees-font'>{term2}</td>
              <td className='p-3 fees-font'>{term3}</td>
              <td className='p-3 fees-font'>{annual}</td>
            </tr>
            </>
          ))
     }
    </>
  )
}

export default NextFeesCard;
