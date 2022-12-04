import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuotesHeader from './QuotesHeader';
import QuotesBody from './QuotesBody';
import useGenerateNewQuotes from '../hooks/useGenerateNewQuotes';
import useGetQuotes from '../hooks/useGetQuotes';
import LoadingSpinner from './LoadingSpinner';
import {
  Typography,
  Table,
  TableContainer,
  TablePagination,
  Button,
  Box,
  Paper,
  TableFooter,
  TableRow,
} from '@mui/material';

export default function QuotesTable() {
  const [page, setPage] = useState(0);
  const { isLoading, error } = useGetQuotes(page);
  const { generateNewQuotes } = useGenerateNewQuotes();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  if (isLoading) <LoadingSpinner />;

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        minHeight="100vh"
        gap="35px"
      >
        <Typography variant="h2">Welcome to Quottastic</Typography>
        <TableContainer sx={{ width: '85%' }} component={Paper}>
          <Table aria-label="custom pagination table">
            <QuotesHeader />
            <QuotesBody />
            <TableFooter sx={{ backgroundColor: '#6366f1' }}>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10]}
                  count={50}
                  onPageChange={handleChangePage}
                  rowsPerPage={10}
                  page={page}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Box display="flex" gap="25px">
          <Link to="/random-quote">
            <Button variant="outlined">Get Random Quote</Button>
          </Link>
          <Button
            variant="outlined"
            onClick={() => {
              generateNewQuotes();
            }}
          >
            Generate New Quotes
          </Button>
        </Box>
        {error && <Typography>{error}</Typography>}
      </Box>
    </>
  );
}
