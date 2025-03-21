import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-16 sm:py-24 space-y-6 text-center"
    >
      <h1 className="text-2xl sm:text-3xl font-bold">
        Let's help your business thrive
      </h1>
      <p className="text-sm sm:text-base">
        Send us your email and we will get back to you
      </p>

      {/* Form */}
      <div className="flex items-center justify-center">
        <form className="flex w-2/3 md:w-full   flex-col sm:flex-row gap-4 justify-center items-center ">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto shadow-md rounded-lg px-6 py-3 bg-[#d2ceda] focus:outline-none"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90">
            Get In Touch
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm sm:text-base mt-10">
        <div className="flex items-center gap-2">
          <FaPhone className="w-4 h-4" />
          <a href="tel:+251-092-059-09">+251-092-059-09</a>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="w-4 h-4" />
          <a href="mailto:shalops.digitals@gmail.com">
            shalops.digitals@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarker className="w-4 h-4" />
          <a href="https://goo.gl/maps/1234567890">
            4 Kilo, Addis Ababa, Ethiopia
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
