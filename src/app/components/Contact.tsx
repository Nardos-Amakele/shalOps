import {FaPhone} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaMapMarker} from 'react-icons/fa'

const Contact = () => {
    return (
      <section id="contact" className="max-w-7xl mx-auto px-20 py-24 space-y-6 text-center bg-[]" >
        <h1 className="text-3xl font-bold">Let's help your business thrive</h1>
        <p>Send us your email and we will get back to you</p>
        <form className="flex gap-4 justify-center">
            <input type="email" placeholder='Enter your email' className="shadow-md rounded-lg px-6 py-3 bg-[#d2ceda]" />
            <button className="px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90">
            Get In Touch
          </button>
        </form>
        <div className="flex gap-4 justify-center mt-10">
          <FaPhone className="w-4 h-4" /> <a href="tel:+251-092-059-09">+251-092-059-09</a>
          <FaEnvelope className="w-4 h-4" /> <a href="mailto:shalops.digitals@gmail.com">shalops.digitals@gmail.com</a>
          <FaMapMarker className="w-4 h-4" /> <a href="https://goo.gl/maps/1234567890">4 kilo,  Addis Ababa, Ethiopia</a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  