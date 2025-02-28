const Portfolio = () => {
    return (
      <section id="portfolio" className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src="/images/project1.jpg" alt="Project 1" className="w-full h-auto" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">Project One</h3>
                <a href="#" className="text-primary hover:underline">View Project</a>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src="/images/project2.jpg" alt="Project 2" className="w-full h-auto" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">Project Two</h3>
                <a href="#" className="text-primary hover:underline">View Project</a>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src="/images/project3.jpg" alt="Project 3" className="w-full h-auto" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">Project Three</h3>
                <a href="#" className="text-primary hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  