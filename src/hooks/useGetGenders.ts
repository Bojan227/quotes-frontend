import { useEffect, useState } from 'react';
import { GenderType } from '../types/QuoteType';
import { QuoteType } from '../types/QuoteType';

export default function useGetGenders(quotes: QuoteType[]) {
  const [genders, setGenders] = useState<GenderType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getGenders();
  }, []);

  const getGenders = async () => {
    setIsLoading(true);
    try {
      const genders = await Promise.all(
        quotes.map(({ a }) =>
          fetch(`https://api.genderize.io/?name=${a.split(' ')[0]}`).then(
            (res) => res.json()
          )
        )
      );

      setGenders(genders);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getGenders, genders, isLoading };
}
