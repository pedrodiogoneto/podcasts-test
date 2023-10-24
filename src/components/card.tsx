/* React Imports */
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`flex px-6 pb-3 bg-white shadow ${className}`}>{children}</div>;
};

export default Card;
