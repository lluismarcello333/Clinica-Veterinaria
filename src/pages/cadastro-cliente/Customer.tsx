

import CustomerFormDataSection from 'hook/customerForm/customerFormDataSection';

import './Customer.css';
import React from 'react';


interface TabPanelProps {
  children?: React.ReactNode;
  index?: any;
  value?: any;
}


export default function Customer(props: TabPanelProps) {
/*   const { register, handleSubmit, onSubmit, errors } = useCustomForm();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }; */

  return (

    <div className='form-container'>
      
      <CustomerFormDataSection/>
    
   
 
    </div>

  );
}
