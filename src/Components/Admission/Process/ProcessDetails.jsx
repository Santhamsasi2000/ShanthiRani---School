import "../../../Styles/Admissions.css";
import { NavLink } from 'react-router-dom';
import { IoMdCall } from "react-icons/io";

const ProcessDetails = () => {
  const forms = [
    { href: '/images/Admission/LKG to 10th Application Form.pdf', label: 'LKG To 10th STD', fileName: 'LKG-10th Admission Form' },
    { href: '/images/Admission/Higher Secondary.pdf', label: '11th and 12th STD', fileName: '11th and 12th Admission Form' },
  ];
  const phoneNumber = '6382174912';

  return (
    <div className="">
      <p className="title">ADMISSION PROCESS</p>
      <p className="fw-bold fs-5">Choose Your Admission Path</p>
      <p className="mb-4">
        Here are three ways you can begin the admissions process in the best school.
      </p>

      {/* Way 1 */}
      <p className="fw-bold">Way 1: MANUAL ADMISSION</p>
      <div className="d-flex gap-3 gap-sm-5 flex-wrap">
        {forms.map((form, index) => (
          <a
            key={index}
            className="btn-common border-0 p-2 text-decoration-none rounded-2 fw-semibold text-center"
            href={form.href}
            download={form.fileName}
          >
            {form.label}
          </a>
        ))}
      </div>
      <ol className="mt-4">
        <li>Download the form.</li>
        <li>Print 2 or 3 copies in case corrections are needed.</li>
        <li>Complete all required fields in the form.</li>
        <li>Bring the completed form along with the required documents listed below.</li>
        <li>Visit our school campus to learn more about Shanthi Rani School.</li>
        <li>Contact our admission team for assistance and submit the form with documents.</li>
        <li>Take the entrance exam.</li>
        <li>Secure your spot at Shanthi Rani School!</li>
      </ol>
      <hr />

      {/* Way 2 */}
      <p className="fw-bold mt-4 mt-sm-5">Way 2: ONLINE ADMISSION</p>
      <div>
        <NavLink
          to="/admissionform"
          className="btn-common border-0 p-2 text-decoration-none rounded-2 fw-semibold text-center"
        >
          CLICK IT
        </NavLink>
        <ol className="mt-4">
          <li>Fill out the online admission form and submit it.</li>
          <li>We will contact you within 2 business days.</li>
          <li>Prepare the required documents listed below.</li>
          <li>Visit our school campus to learn more about Shanthi Rani School.</li>
          <li>Contact our admission team and submit the form with documents.</li>
          <li>Take the entrance exam.</li>
          <li>Secure your spot at Shanthi Rani School!</li>
        </ol>
      </div>
      <hr />

      {/* Way 3 */}
      <p className="fw-bold mt-4 mt-sm-5">Way 3: GUIDED ADMISSION</p>
      <a
        href={`tel:${phoneNumber}`}
        className="btn-common border-0 p-2 text-decoration-none rounded-2 fw-semibold text-center"
        aria-label="Call 6382174912 for admission guidance"
      >
        <IoMdCall className="fs-5 me-1" />
        {phoneNumber}
      </a>
      <ol className='mt-4'>
        <li>Call this number for personalized admission guidance.</li>
      </ol>
      <hr />
    </div>
  );
};

export default ProcessDetails;
