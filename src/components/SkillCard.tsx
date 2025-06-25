import React from 'react';
import Card from './Card';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level?: number; // 0-100
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, level }) => {
  return (
    <Card className="p-4 flex flex-col items-center text-center">
      <div className="text-4xl mb-3 text-white">{icon}</div>
      <h3 className="text-lg font-medium text-white mb-2">{name}</h3>
      {level !== undefined && (
        <div className="w-full bg-[#2a3446] h-2 rounded-full overflow-hidden mt-2">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      )}
    </Card>
  );
};

export default SkillCard;