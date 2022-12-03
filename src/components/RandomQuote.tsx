import Box from '@mui/material/Box';
import useGetRandomQuote from '../hooks/useGetRandomQuote';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

export default function RandomQuote() {
  const { quote, getRandomQuote, error, isLoading } = useGetRandomQuote();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="25px"
      minHeight="100vh"
    >
      <Link to="/">
        <Button variant="outlined">Back to Quotes</Button>
      </Link>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Box
          sx={{
            width: '75%',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            p: '25px',
            textAlign: 'center',
            borderRadius: '15px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '25px',
          }}
        >
          <Typography variant="h4">{quote?.q}</Typography>
          <Typography variant="h4">Author - {quote?.a}</Typography>
        </Box>
      )}
      <Box>
        <Button onClick={() => getRandomQuote()} variant="outlined">
          Get Random quote
        </Button>
      </Box>
      {error && <Typography variant="h4">{error}</Typography>}
    </Box>
  );
}
