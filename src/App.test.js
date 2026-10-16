// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughArchive title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughArchive/i);
    expect(titleElement).toBeInTheDocument();
});
