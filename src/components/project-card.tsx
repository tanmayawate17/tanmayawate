
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  image?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tools,
  image,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'group neon-card overflow-hidden transition-all duration-300 flex flex-col h-full',
        className
      )}
    >
      {image && (
        <div className="mb-4 h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md border border-[#333] transition-all duration-300 group-hover:border-neon-blue"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
