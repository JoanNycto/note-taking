import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render login form', () => {
    render(<App />);
    const loginElements = screen.getAllByText('Login');
    expect(loginElements[0]).toBeInTheDocument(); // Assuming the first occurrence is the desired one
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('should render registration option', () => {
    render(<App />);
    expect(screen.getByText('New here? Register')).toBeInTheDocument();
  });
});
