import React from 'react';

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p style={{ color: message ? 'red' : 'inherit' }}>{message}</p>
  );
};

export default ErrorMessage;
