import About from './About';
import Foundation from './Foundation';
import SmartClass from './SmartClass';
import FacilitiesHome from './FacilitiesHome';
import { React } from 'react';

const Home = () => {
  return (
    <section className='common-bg'>
      <div className='p-3 p-sm-4'>
        <About/>
        <SmartClass/>
        <FacilitiesHome/>
      </div>
      {/* <Foundation/> */}
    </section>
  )
}

export default Home
