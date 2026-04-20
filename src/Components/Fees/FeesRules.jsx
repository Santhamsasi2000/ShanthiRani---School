const FeesRules = () => {
  return (
    <>
       <p className="subTitle text-start mt-4">Rules and Regulation For School Fees:</p>
       <ol className="mb-5 text-justify">
         <li>The School Fee is collected for 12 months of the year.</li>
         <li>The Fees should be paid whole at the time of admission or in three terms.</li>
         <li>The student will not be permitted to write the terminal examination unless all fees due have been paid.</li>
         <li>Fees once paid will not be refunded in whole or in part under any circumstances.</li>
         <li>Students who remain absent for a long or short period of time, with or without permission, cannot be exempted from payment of fees.</li>
       </ol>
       <table>
         <tr>
           <th className="fees-term">Terms</th>
           <th>Last Date of Payment</th>
         </tr>
         <tr>
          <td className="fees-term">I Term</td>
          <td>Within August 2nd Week</td>
         </tr>
         <tr>
          <td className="fees-term">II Term</td>
          <td>Within November 2nd Week</td>
         </tr>
         <tr>
          <td className="fees-term">III Term</td>
          <td>Within February 2nd Week</td>
         </tr>
       </table>
    </>
  )
}

export default FeesRules
