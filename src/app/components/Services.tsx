const Services = () => {
    return (
      <section id="services" className="py-20 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-primary">Web Development</h3>
              <p className="text-gray-600">Modern and responsive websites built with Next.js and TypeScript.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-primary">UI/UX Design</h3>
              <p className="text-gray-600">Innovative designs that provide an exceptional user experience.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-primary">Digital Marketing</h3>
              <p className="text-gray-600">Strategies to grow your brand and reach your target audience effectively.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  