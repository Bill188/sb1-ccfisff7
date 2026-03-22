import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

const projectCategories = ['All', 'Cleaning', 'Renovation', 'Maintenance', 'Commercial'];

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'Renovation',
    description: 'Complete kitchen overhaul with custom cabinetry, new appliances, and premium countertops.',
    imageBefore: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAfter: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  {
    id: 2,
    title: 'Office Deep Cleaning',
    category: 'Cleaning',
    description: 'Comprehensive office cleaning including carpets, windows, and sanitization of all surfaces.',
    imageBefore: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAfter: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  {
    id: 3,
    title: 'Exterior Home Maintenance',
    category: 'Maintenance',
    description: 'Complete exterior maintenance including pressure washing, gutter cleaning, and minor repairs.',
    imageBefore: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAfter: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  {
    id: 4,
    title: 'Retail Store Renovation',
    category: 'Commercial',
    description: 'Full retail space renovation with new flooring, lighting, and custom fixtures.',
    imageBefore: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAfter: 'https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  {
    id: 5,
    title: 'Bathroom Remodel',
    category: 'Renovation',
    description: 'Luxury bathroom renovation with walk-in shower, custom vanity, and premium fixtures.',
    imageBefore: 'https://images.pexels.com/photos/6444261/pexels-photo-6444261.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAfter: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  {
    id: 6,
    title: 'Commercial Building Cleaning',
    category: 'Commercial',
    description: 'Comprehensive cleaning of a multi-floor commercial building including common areas and offices.',
    imageBefore: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAfter: 'https://images.pexels.com/photos/245219/pexels-photo-245219.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Projects"
          subtitle="See the transformation in our before and after showcase"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              imageBefore={project.imageBefore}
              imageAfter={project.imageAfter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;