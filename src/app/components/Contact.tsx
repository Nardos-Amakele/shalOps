const Contact = () => {
    return (
      <section id="contact" className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary">Contact Us</h2>
          <form className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-lg text-xl hover:bg-[#7a5bb8] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  