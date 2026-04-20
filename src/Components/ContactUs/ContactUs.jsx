import { TiMediaFastForwardOutline } from "react-icons/ti";
import "../../Styles/ContactUs.css";
import ContactUsForm from "./ContactForm/ContactUsForm";
import Location from "./Location";
import Timings from "./Timings";
import Direction from "./Direction";

const ContactUs = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
      <p className="title mb-4">Contact Us</p>
      <div className="d-flex flex-column flex-lg-row gap-5 justify-content-between">
        <div>
          <Location/>
          <Timings/>
          <Direction/>
        </div>
        <ContactUsForm/>
      </div>
    </section>
  )
}

export default ContactUs
