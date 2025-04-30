import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the Zod schema
const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  age: z
    .string()
    .refine((val) => {
      const parsed = parseInt(val, 10);
      return !isNaN(parsed) && parsed >= 18;
    }, { message: 'You must be at least 18 years old' }),
});

const MyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
    reset(); // Clears the form fields
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration Form</h2>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
          Name:
        </label>
        <input
          id="name"
          {...register('name')}
          style={{
            width: '100%',
            padding: '8px',
            boxSizing: 'border-box',
            border: errors.name ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        {errors.name && (
          <p style={{ color: 'red', marginTop: '5px' }}>{errors.name.message}</p>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          style={{
            width: '100%',
            padding: '8px',
            boxSizing: 'border-box',
            border: errors.email ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        {errors.email && (
          <p style={{ color: 'red', marginTop: '5px' }}>{errors.email.message}</p>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="age" style={{ display: 'block', marginBottom: '5px' }}>
          Age:
        </label>
        <input
          id="age"
          type="number"
          {...register('age')}
          style={{
            width: '100%',
            padding: '8px',
            boxSizing: 'border-box',
            border: errors.age ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        {errors.age && (
          <p style={{ color: 'red', marginTop: '5px' }}>{errors.age.message}</p>
        )}
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
