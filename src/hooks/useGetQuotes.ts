import { useEffect, useState } from 'react';
import { useAddQuotes } from '../context/quotesContext';

export default function useGetQuotes(page: number) {
  const addQuotes = useAddQuotes();
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

      addQuotes(json);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, error };
}
