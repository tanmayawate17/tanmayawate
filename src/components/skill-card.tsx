
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  description?: string;
  color?: 'blue' | 'pink' | 'green';
  className?: string;
}

const SkillCard = ({
  title,
  icon: Icon,
  description,
  color = 'blue',
  className,
}: SkillCardProps) => {
  const colorClasses = {
    blue: 'hover:shadow-neon-blue group-hover:text-neon-blue',
    pink: 'hover:shadow-neon-pink group-hover:text-neon-pink',
    green: 'hover:shadow-neon-green group-hover:text-neon-green',
  };

  return (
    <div
      className={cn(
        'group skill-card flex flex-col items-center',
        colorClasses[color],
        className
      )}
    >
      <div className="mb-4 p-3 rounded-full bg-[#111] border border-[#333] transition-all duration-300 group-hover:border-neon-blue">
        <Icon
          className={cn(
            'h-8 w-8 text-gray-400 transition-all duration-300',
            color === 'blue' && 'group-hover:text-neon-blue',
            color === 'pink' && 'group-hover:text-neon-pink',
            color === 'green' && 'group-hover:text-neon-green'
          )}
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
        {title}
      </h3>
      {description && <p className="text-gray-400 text-center text-sm">{description}</p>}
    </div>
  );
};

export default SkillCard;
