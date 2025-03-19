'use client';

import Image from 'next/image';
import PortfolioIcon from '../../../public/portfolio-svgrepo-com.svg'
import project1 from '../../../public/robi.svg'
import project2 from '../../../public/magna.svg'

const projects = [
  {
    title: 'Robifitness.com',
    description: 'A brief description of project one, highlighting key aspects.',
    image: project1,
  },
  {
    title: 'magna.com',
    description: 'A brief description of project two, showcasing its uniqueness.',
    image: project2,
  },
  {
    title: 'magna.com',
    description: 'A brief description of project three, illustrating its impact.',
    image: project2,
  },
  {
    title: 'Robifitness.com',
    description: 'A brief description of project four, detailing its innovations.',
    image:project1,
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto px-20 py-24 text-center" id='portfolio'>
      {/* Icon */}
      <div className="flex justify-center mb-6">
      <Image src={PortfolioIcon} className='w-24' alt='portfolio-icon'></Image>
      </div>

      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Some of What We Have Done</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Here are some of our projects, showcasing our commitment to innovation, excellence, and delivering high-quality solutions.
      </p>

      {/* Projects Grid */}
      <div className="flex flex-wrap gap-24 justify-center">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-96">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-left">{project.title}</h3>
              <p className="text-gray-600 text-sm text-left font-extralight">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
