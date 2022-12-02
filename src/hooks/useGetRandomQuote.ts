import { useEffect, useState } from 'react';
import { QuoteType } from '../types/QuoteType';

export default function useGetRandomQuote() {
  const [quote, setQuote] = useState<QuoteType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/quotes/random-quote`);
      const json = await res.json();

      setQuote(json);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { quote, getRandomQuote, isLoading, error };
}
