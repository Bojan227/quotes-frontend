import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuotesHeader from './QuotesHeader';
import QuotesBody from './QuotesBody';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';
import useGenerateNewQuotes from '../hooks/useGenerateNewQuotes';
import Button from '@mui/material/Button';
import useGetQuotes from '../hooks/useGetQuotes';

export default function QuotesTable() {
  const [page, setPage] = useState(0);
  const { generateNewQuotes } = useGenerateNewQuotes();
  const { quotes, setQuotes } = useGetQuotes(page);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="100vh"
      gap="25px"
    >
      <TableContainer>
        <Table>
          <QuotesHeader />
          <QuotesBody {...{ page, quotes }} />
          <TablePagination
            rowsPerPageOptions={[10]}
            count={50}
            onPageChange={handleChangePage}
            rowsPerPage={10}
            page={page}
          />
        </Table>
      </TableContainer>
      <Box display="flex" gap="25px">
        <Link to="/random-quote">
          <Button variant="outlined">Get Random Quote</Button>
        </Link>
        <Button
          variant="outlined"
          onClick={() => {
            generateNewQuotes(setQuotes);
          }}
        >
          Generate New Quotes
        </Button>
      </Box>
    </Box>
  );
}
