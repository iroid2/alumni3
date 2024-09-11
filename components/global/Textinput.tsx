import React from 'react'
import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form'

type TextInputProps = {
  register: UseFormRegister<any>
  errors: FieldErrors
  label: string
  name: string
  type?: string
  rules?: RegisterOptions
  className?: string
  placeholder?: string
}

const TextInput: React.FC<TextInputProps> = ({ 
  register, 
  errors, 
  label, 
  name, 
  type = 'text', 
  rules,
  className,
  placeholder
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        {...register(name, rules)}
        className={`mt-1 block w-full rounded-md py-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors[name] ? 'border-red-500' : ''} ${className}`}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  )
}

export default TextInput