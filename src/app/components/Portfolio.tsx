"use client";
import Image from "next/image";
import PortfolioIcon from "../../../public/portfolio-svgrepo-com.svg";
import ecp from "../../../public/ecp.png";
import magna from "../../../public/magna.png";
import brukti from "../../../public/brukti.png";
import project1 from "../../../public/robi.svg";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const projects = [
  {
    title: "demo.Robifitness.com",
    description:
      "End-to-end gym automation: Our software natively integrates with leading access control systems, website  with registration, and optional user-end features.",
    image: project1,
    url: "https://demo.robifitness.com/",
  },
  {
    title: "ethiocollegeprep.com",
    description:
      "Ethio College Prep (ECP) is an educational consultancy that helps Ethiopian high school students prepare for and apply to colleges abroad, primarily in the US and Canada.",
    image: ecp,
    url: "https://www.ethiocollegeprep.com/",
  },

  {
    title: "magnaplc.com",
    description:
      "A stunning portfolio website showcasing Magna's most impactful events and marketing campaigns – designed to convert visitors into clients with immersive galleries, case studies, and effortless inquiry features.",
    image: magna,
    url: "https://magnaplc.com/",
  },
  {
    title: "bruktishopping.com",
    description:
      "An Ecommerce website for an influencer showcasing a variety of products, including clothing.",
    image: brukti,
    url: "https://bruktishopping.com/",
  },
];

export default function ProjectsPage() {
  const router = useRouter(); // Next.js router for navigation

  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-20 py-24 text-center"
      id="portfolio"
    >
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <Image src={PortfolioIcon} className="w-24" alt="portfolio-icon" />
      </div>

      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Some of What We Have Done
      </h2>
      <p className="text-black max-w-2xl font-light mx-auto mb-12">
        Here are some of our projects, showcasing our commitment to innovation
        and excellence.
      </p>

      {/* Projects Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[30rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
            onClick={() => router.push(project.url)} // Make the whole card clickable
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-64 object-contain p-5 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 text-left text-gray-800 group-hover:text-[#563589] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-left font-light">
                {project.description}
              </p>

              {/* View Project Button - visible on all screen sizes */}
              <div className="mt-4">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm border border-[#8C52FF] text-[#8C52FF] rounded-md hover:bg-gradient-to-r hover:from-[#8C52FF]  hover:to-[#160E23] hover:text-white transition-all duration-300"
                  onClick={(e) => e.stopPropagation()} // Prevents the full card click from triggering when clicking this button
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
