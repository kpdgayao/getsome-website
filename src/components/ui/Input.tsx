import React from 'react';
import { cn } from '../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-coffee-800 text-sm font-semibold mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 border-2 rounded-lg',
          'focus:outline-none focus:ring-2 focus:ring-coffee-500',
          error ? 'border-red-500 text-red-900' : 'border-coffee-200 text-coffee-900',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;