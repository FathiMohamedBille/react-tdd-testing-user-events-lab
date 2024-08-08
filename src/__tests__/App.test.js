 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import App from '../App';
 test('renders newsletter signup form', () => { 
render(<App />); 
expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
expect(screen.getByLabelText(/email/i)).toBeInTheDocument(); 
expect(screen.getByText(/interests/i)).toBeInTheDocument();
expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument(); 
});
 test('can type in the name input', () => { 
render(<App />); 
const nameInput = screen.getByLabelText(/name/i); 
fireEvent.change(nameInput, { target: { value: 'John Doe' } 
});
 expect(nameInput.value).toBe('John Doe'); 
});
 test('can type in the email input', () => {
 render(<App />); 
 const emailInput = screen.getByLabelText(/email/i); 
 fireEvent.change(emailInput, { target: { value: 'john@example.com' } 
});
 expect(emailInput.value).toBe('john@example.com'); 
});
 test('can check interests checkboxes', () => { render(<App />); 
const techCheckbox = screen.getByLabelText(/tech/i); 
const sportsCheckbox = screen.getByLabelText(/sports/i);
 const musicCheckbox = screen.getByLabelText(/music/i); 
 fireEvent.click(techCheckbox); 
 fireEvent.click(sportsCheckbox);
  fireEvent.click(musicCheckbox);
 expect(techCheckbox.checked).toBe(true); 
 expect(sportsCheckbox.checked).toBe(true); 
 expect(musicCheckbox.checked).toBe(true); 
});
 test('displays a personalized message after form submission', () => { render(<App />); 
const nameInput = screen.getByLabelText(/name/i);
 const emailInput = screen.getByLabelText(/email/i); 
 const techCheckbox = screen.getByLabelText(/tech/i);
 const submitButton = screen.getByRole('button', { name: /submit/i });
 fireEvent.change(nameInput, { target: { value: 'John Doe' } });
 fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
 fireEvent.click(techCheckbox); 
 fireEvent.click(submitButton); 
 expect(screen.getByText(/thank you, john doe, for signing up!/i)).toBeInTheDocument();
  expect(screen.getByText(/your interests are: tech/i)).toBeInTheDocument(); 
});

