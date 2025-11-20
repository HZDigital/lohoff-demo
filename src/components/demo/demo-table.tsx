import { type CsvRow } from "@/types/csv-row";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export function DemoTable({data} : { data: CsvRow[] }) {

  return (
    <Table className="w-full px-8">
      <TableHeader>
        <TableRow>
          <TableHead>Quarter</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Profit</TableHead>
          <TableHead>Orders</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.Quarter}</TableCell>
            <TableCell>{row.Year}</TableCell>
            <TableCell>{row.Revenue}</TableCell>
            <TableCell>{row.Profit}</TableCell>
            <TableCell>{row.Orders}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}