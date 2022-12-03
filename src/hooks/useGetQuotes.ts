import { useEffect, useState } from 'react';
import { QuoteType } from '../types/QuoteType';

export default function useGetQuotes(page: number) {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getQuotes();
  }, [page]);

  const getQuotes = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/quotes/?page=${page}`);
      const json = await res.json();

      setQuotes(json);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };
  return { quotes, setQuotes, isLoading, error };
}
