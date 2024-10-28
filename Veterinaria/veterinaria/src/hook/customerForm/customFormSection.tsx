import React from 'react';

interface CustomerFormSectionProps {
  title: string;
  children?: React.ReactNode;
}

const CustomerFormSection: React.FC<CustomerFormSectionProps> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
    
  );
};

export default CustomerFormSection;
