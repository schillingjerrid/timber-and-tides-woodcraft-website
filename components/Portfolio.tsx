'use client';

import React, { useState } from 'react';
import Card from './Card';

const projects = [
  { 
    id: 1,
    title: 'Cornhole Boards',
    imageUrl: '/product-1.png',
    altText: 'Image of custom made cornhole boards',
    description: 'Custom made cornhole boards with a variety of designs and finishes.'
  },
  { 
    id: 2,
    title: 'Amish Style Candy Jar',
    imageUrl: '/product-2.png',
    altText: 'Image of wooden amish style candy jar',
    description: 'Handmade wooden candy jar with a unique design and finish.'
  },
  { 
    id: 3,
    title: 'Cutting Boards',
    imageUrl: '/product-1.png',
    altText: 'Image of a handful of custom end-grain cutting boards.',
    description: 'Custom end-grain cutting boards made from a variety of woods.'
  },
  { 
    id: 4,
    title: 'Bookshelf With Hidden Drawers',
    imageUrl: '/product-2.png',
    altText: 'Image of a large cherry bookshelf with hidden drawers.',
    description: 'Large cherry bookshelf with hidden drawers and a ornate trimmings.'
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="portfolio" className="py-16 glass">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">Portfolio</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {projects.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)}>
              <Card title={project.title} imageUrl={project.imageUrl} altText={project.altText} description={project.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
