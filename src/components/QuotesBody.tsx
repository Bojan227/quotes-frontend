import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import useGetQuotes from '../hooks/useGetQuotes';
import AuthorGender from './AuthorGender';
import { QuoteType } from '../types/QuoteType';

export default function QuotesBody({
  page,
  quotes,
}: {
  page: number;
  quotes: QuoteType[];
}) {
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
