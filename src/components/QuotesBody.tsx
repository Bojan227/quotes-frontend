import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import AuthorGender from './AuthorGender';
import { useQuotes } from '../context/quotesContext';

export default function QuotesBody() {
  const quotes = useQuotes();
  return (
    <TableBody>
      {quotes?.map(({ _id, a, q }, i) => {
        return (
          <TableRow key={_id}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{a}</TableCell>
            <TableCell>{q}</TableCell>
            <AuthorGender author={a} />
          </TableRow>
        );
      })}
    </TableBody>
  );
}
