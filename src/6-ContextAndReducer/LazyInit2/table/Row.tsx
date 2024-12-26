import { ReactElement } from 'react';

interface RowProps {
  rowId: number;
  array: number[];
  onClick: (rowId: number) => void;
}

export function Row({ rowId, array, onClick }: RowProps): ReactElement {
  const handleClick = () => {
    onClick(rowId);
  };

  return (
    <tr onClick={handleClick}>
      {array.map((value, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
}
