import React from 'react';
import Button from '@mui/material/Button';
import WhatsAppIcon from "../../assets/whatsapp-svgrepo-com.svg";

interface CustomButtonProps {
  buttonName: string;
  variant?: 'contained' | 'outlined' | 'text';
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonName, variant = 'contained', className }) => {
  return (
    <Button variant={variant} className={`action-button ${className || ''}`}>
      <img 
        src={WhatsAppIcon} 
        alt="WhatsApp" 
        style={{ marginRight: '8px', width: '20px', height: '20px' }} 
      />
      {buttonName}
    </Button>
  );
};

export default CustomButton;

