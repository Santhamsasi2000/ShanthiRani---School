import React from 'react';
import "../../Styles/Fees.css";
import NextFeesCard from './NextFeesCard';
import FeesRules from './FeesRules';

const NextFees = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <p className="title mb-2">FEE STRUCTURE</p>
       <p className='mb-0 subTitle'> YEAR 2025 - 2026</p>
       <div className="d-flex justify-content-center mt-3">
         <table className="table">
              <thead>
                <tr>
                  <th className="fw-bold text-uppercase p-3 fees-font">Class</th>
                  <th className="fw-bold text-uppercase p-3 fees-font">I Term</th>
                  <th className="fw-bold text-uppercase p-3 fees-font">II Term</th>
                  <th className="fw-bold text-uppercase p-3 fees-font">III Term</th>
                  <th className="fw-bold text-uppercase p-3 fees-font">Annual Fees</th>
                </tr>
              </thead>
              <tbody>
                <NextFeesCard/>
              </tbody>
            </table>
       </div>
       <FeesRules/>
    </section>
  )
}

export default NextFees;
