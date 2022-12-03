import { useEffect, useState } from 'react';
import { GenderType } from '../types/GenderType';
import { QuoteType } from '../types/QuoteType';

export default function useGetGenders(quotes: QuoteType[]) {
  const [genders, setGenders] = useState<GenderType[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getGenders();
  }, []);

  const getGenders = async () => {
    setIsLoading(true);
    try {
      const _genders = await Promise.all(
        quotes.map(async ({ a }) => {
          const res = await fetch(
            `https://api.genderize.io/?name=${a.split(' ')[0]}`
          );
          const { gender } = await res.json();
          return gender;
        })
      );

      setGenders(_genders);
    } catch (error) {
      setError('Failted to get genders');
    } finally {
      setIsLoading(false);
    }
  };

  return { getGenders, genders, isLoading, error };
}
