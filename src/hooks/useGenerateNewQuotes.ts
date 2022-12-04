import { useState } from 'react';
import { useAddQuotes } from '../context/quotesContext';
export default function useGenerateNewQuotes() {
  const [errorMessage, setError] = useState('');
  const addQuotes = useAddQuotes();

  const generateNewQuotes = async () => {
    try {
      const res = await fetch(`http://localhost:8000/quotes/generate`);
      const { newQuotes } = await res.json();

      addQuotes(newQuotes);
    } catch (error) {
      setError('Unable to find new quotes');
    }
  };

  return { generateNewQuotes, errorMessage };
}
