import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function QuotesHeader() {
  return (
    <TableHead sx={{ backgroundColor: '#6366f1' }}>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Author</TableCell>
        <TableCell align="left">Quote</TableCell>
        <TableCell align="left">Gender</TableCell>
      </TableRow>
    </TableHead>
  );
}
