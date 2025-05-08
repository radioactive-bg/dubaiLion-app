import React from 'react';

interface RequirementItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const RequirementItem: React.FC<RequirementItemProps> = ({ icon, label, value }) => (
  <li className="flex items-center text-secondary-300">
    <span className="text-gaming-accent mr-2">{icon}</span>
    <span className="font-medium mr-2">{label}:</span>
    <span>{value}</span>
  </li>
);

export default RequirementItem; 