import { useState } from 'react';
import { QuoteType } from '../types/QuoteType';
export default function useGenerateNewQuotes() {
  const [error, setError] = useState('');
  const generateNewQuotes = async (
    setQuotes: React.Dispatch<React.SetStateAction<QuoteType[]>>
  ) => {
    try {
      const res = await fetch(`http://localhost:8000/quotes/generate`);
      const { newQuotes } = await res.json();

      setQuotes(newQuotes);
    } catch (error) {
      setError('Unable to find new quotes');
    }
  };

  return { generateNewQuotes };
}
