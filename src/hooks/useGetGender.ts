import { useEffect, useState } from 'react';
import { GenderType } from '../types/GenderType';
import { QuoteType } from '../types/QuoteType';

export default function useGetGender(author: string) {
  const [gender, setGender] = useState<'👨' | '👱‍♀️'>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getGender();
  }, [author]);

  const getGender = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.genderize.io/?name=${author.split(' ')[0]}`
      );
      const { gender } = await res.json();

      setGender(gender === 'male' ? '👨' : '👱‍♀️');
    } catch (error) {
      setError('Cannot fetch genders');
    } finally {
      setIsLoading(false);
    }
  };

  return { gender, isLoading, error };
}
