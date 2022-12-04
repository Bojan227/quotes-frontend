import { useCallback, useContext, createContext, useReducer } from 'react';
import { QuoteType } from '../types/QuoteType';

type ActionType = { type: 'ADD'; quotes: QuoteType[] };

type QuoteManagerResult = ReturnType<typeof QuoteManager>;

const QuotesContext = createContext<QuoteManagerResult>({
  quotes: [],
  addQuotes: () => {},
});

function QuoteManager(initialQuotes: QuoteType[]): {
  quotes: QuoteType[];
  addQuotes: (quotes: QuoteType[]) => void;
} {
  const [quotes, dispatch] = useReducer(
    (state: QuoteType[], action: ActionType) => {
      switch (action.type) {
        case 'ADD':
          return [...action.quotes];
        default:
          return state;
      }
    },
    initialQuotes
  );

  const addQuotes = useCallback((quotes: QuoteType[]) => {
    dispatch({ type: 'ADD', quotes });
  }, []);

  return { quotes, addQuotes };
}

export const QuotesProvider: React.FunctionComponent<{
  initialQuotes: QuoteType[];
  children: React.ReactNode;
}> = ({ initialQuotes, children }) => {
  return (
    <QuotesContext.Provider value={QuoteManager(initialQuotes)}>
      {children}
    </QuotesContext.Provider>
  );
};

export const useQuotes = (): QuoteType[] => {
  const { quotes } = useContext(QuotesContext);
  return quotes;
};

export const useAddQuotes = (): QuoteManagerResult['addQuotes'] => {
  const { addQuotes } = useContext(QuotesContext);
  return addQuotes;
};
