import TableCell from '@mui/material/TableCell';
import useGetGender from '../hooks/useGetGender';
import LoadingSpinner from './LoadingSpinner';

export default function AuthorGender({ author }: { author: string }) {
  const { gender, isLoading } = useGetGender(author);

  if (isLoading) <LoadingSpinner />;
  return <TableCell>{gender}</TableCell>;
}
