import React from 'react';
import Swal from 'sweetalert2';

const FormUptoXstd = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f67d7f82-1e54-4756-9d5b-4befbf4bc88d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
          title: "Message Send!",
          text: "We will get back to you as soon as possible",
          icon: "success"
        });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='p-3 p-sm-5'>
       <p className='title mb-4'>ONLINE ADMISSION FORM</p>
       <section className='d-flex justify-content-center'>
         <form onSubmit={onSubmit} className='w-100'>
            <p className='subTitle text-start'>STUDENT DETAILS :</p>
            {/* Student's Name */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Name of the Student</label>
                <input type='text' name="Name of the Student" className='field mt-2 rounded border border-1 ps-3' placeholder='Your Name *' required />
            </div>
            {/* Student's Initial */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Student's Initial</label>
                <input type='text' name="Student's Initial" className='field mt-2 rounded border border-1 ps-3' placeholder="Student's Initial *" required />
            </div>
             {/* Standard */}
             <div className='input-box mb-4'>
                <label className='mb-2 label-color fw-bold'>Standard</label>
                <select class="form-select" aria-label="Default select example" style={{height:"50px"}} name="Student Standard">
                    <option selected>Select Student Standard</option>
                    <option value="Pre Kg">Pre Kg</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="I STD">I STD</option>
                    <option value="II STD">II STD</option>
                    <option value="III STD">III STD</option>
                    <option value="IV STD">IV STD</option>
                    <option value="V STD">V STD</option>
                    <option value="VI STD">VI STD</option>
                    <option value="VII STD">VII STD</option>
                    <option value="VIII STD">VIII STD</option>
                    <option value="IX STD">IX STD</option>
                    <option value="X STD">X STD</option>
                    <option value="XI STD">XI STD</option>
                    <option value="XII STD">XII STD</option>
                </select>
             </div>
             {/* Student's DOB */}
            <div className='input-box mb-4'>
              <label htmlFor='dob' className='form-label'>Date of Birth</label>
              <input type='date' id='dob' name='Date of Birth' className='form-control'/>
            </div>
             {/* Student's Gender */}
            <div className='input-box mb-4'>
                <p>GENDER</p>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="Gender" id='Male' value="Male"/>
                    <label className='form-check-label' htmlFor='Male'>MALE</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="Gender" id='Female' value="Female"/>
                    <label className='form-check-label' id='Female'>FEMALE</label>
                </div>
            </div>
            {/* Mother Tongue */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>MOTHER TONGUE</label>
                <input type='text' name="Mother Tongue" className='field mt-2 rounded border border-1 ps-3' placeholder='Enter Your Mother Tongue' required />
            </div>
            {/* Religion */}
            <div className='input-box mb-4'>
                <p>RELIGION</p>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="religion" id='christian' value="Christian"/>
                    <label className='form-check-label' htmlFor='christian'>CHRISTIAN</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="religion" id='muslim' value="Muslim"/>
                    <label className='form-check-label' id='muslim'>MUSLIM</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="religion" id='hindu' value="Hindu"/>
                    <label className='form-check-label' id='hindu'>HINDU</label>
                </div>
            </div>
             {/* Nationality */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Nationality</label>
                <input type='text' name="Student's Nationality" className='field mt-2 rounded border border-1 ps-3' placeholder='Student Nationality *' required />
            </div>
            {/* State */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>State</label>
                <input type='text' name="Student's State" className='field mt-2 rounded border border-1 ps-3' placeholder='Student State *' required />
            </div>
            {/* Caste */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Caste</label>
                <input type='text' name="Student's Caste" className='field mt-2 rounded border border-1 ps-3' placeholder='Student Caste *' required />
            </div>
            {/* Community */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Community</label>
                <input type='text' name="Student's Community" className='field mt-2 rounded border border-1 ps-3' placeholder='Student Community *' required />
            </div>
            {/* Residental Address */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Residential Address</label>
                <input type='text' name="Student's Address" className='field mt-2 rounded border border-1 ps-3' placeholder="Student's Address" required />
            </div>
            <p className='subTitle text-start'>LAST SCHOOL DETAILS:</p>
            {/* Name of the school */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Name of the School</label>
                <input type='text' name="Student's Last School Name" className='field mt-2 rounded border border-1 ps-3' placeholder='Student Last School *' required />
            </div>
            {/* Place of the school */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Place of the School</label>
                <input type='text' name="Student's Last School Place" className='field mt-2 rounded border border-1 ps-3' placeholder='Student Last School Place *' required />
            </div>
            {/* Last Studied Class */}
            <div className='input-box mb-4'>
                <label className='mb-2 label-color fw-bold'>Last Studied Standard</label>
                <select class="form-select" aria-label="Default select example" style={{height:"50px"}} name="Last Studied Standard">
                    <option selected>Select Student Standard</option>
                    <option value="Pre Kg">Pre Kg</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="I STD">I STD</option>
                    <option value="II STD">II STD</option>
                    <option value="III STD">III STD</option>
                    <option value="IV STD">IV STD</option>
                    <option value="V STD">V STD</option>
                    <option value="VI STD">VI STD</option>
                    <option value="VII STD">VII STD</option>
                    <option value="VIII STD">VIII STD</option>
                    <option value="IX STD">IX STD</option>
                    <option value="X STD">X STD</option>
                    <option value="XI STD">XI STD</option>
                    <option value="XII STD">XII STD</option>
                </select>
             </div>
            {/* Medium */}
            <div className='input-box mb-4'>
                <p>Last Studied Medium</p>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="medium" id='english' value="english"/>
                    <label className='form-check-label' htmlFor='english'>ENGLISH</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="medium" id='tamil' value="english"/>
                    <label className='form-check-label' id='tamil'>TAMIL</label>
                </div>
            </div>
            {/* Passed the Exam */}
            <div className='input-box mb-4'>
                <p>Passed the Exam</p>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="examPassed" id='pass' value="Passed the Exam"/>
                    <label className='form-check-label' htmlFor='pass'>PASS</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name="examPassed" id='fail'  value="Passed the Exam"/>
                    <label className='form-check-label' id='fail'>FAIL</label>
                </div>
            </div>
            <p className='subTitle text-start'>PARENTS DETAILS:</p>
            {/* Father's Name */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Father/Guardian Name</label>
                <input type='text' name="Student's Father/Guardian Name" className='field mt-2 rounded border border-1 ps-3' placeholder="Student's Father/Guardian Name *" required />
            </div>
            {/* Father's Occupation*/}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Father/Guardian Occupation</label>
                <input type='text' name="Student's Father/Guardian Occupation" className='field mt-2 rounded border border-1 ps-3' placeholder="Student's Father/Guardian Occupation *" required />
            </div>
            {/* Mother's Name */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Mother's Name</label>
                <input type='text' name="Student's Mother Name" className='field mt-2 rounded border border-1 ps-3' placeholder="Student's Mother Name" required />
            </div>
            {/* Mobile Number 1 */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Mobile Number 1</label>
                <input type='text' name="Student's Mobile Number 1" className='field mt-2 rounded border border-1 ps-3' placeholder="Student's Mobile Number 1 *" required />
            </div>
            {/* Mobile Number 2 */}
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Mobile Number 2 (Optional)</label>
                <input type='text' name="Student's Mobile Number 2" className='field mt-2 rounded border border-1 ps-3' placeholder="Student's Mobile Number 2"/>
            </div>
            <div className="form-check mb-4">
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
               <label className="form-check-label" htmlfor="flexCheckDefault">
                  I declare  that  the particulars given above are correct to the best of my knowledge and that I will abide by the rules of the School.
               </label>
            </div>
            <div className="form-check mb-4">
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
               <label className="form-check-label" htmlfor="flexCheckDefault">
                  I am aware  that admission  obtained  on false information  or by suppression of facts will be cancelled  on detection at any time.
               </label>
            </div>
            <button type='submit' className='btn-common border-0 px-5 py-2 fw-bold rounded-2'>SEND</button>
          </form>
     </section>
    </div>
  )
}

export default FormUptoXstd;
