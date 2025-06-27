import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import SectionTitle from "./SectionTitle";

type PropItem = {
  property: string;
  type: string;
  default: string;
  description: string;
};

type PropsTableProps = {
  data: PropItem[];
};

const PropsTable = ({data}: PropsTableProps) => {
  return (
    <div>
      <SectionTitle className="mt-4">Props</SectionTitle>
      <div className="border border-muted rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-muted bg-muted/40">
              <TableHead className="font-medium border-r border-muted px-6 py-4.5">
                Property
              </TableHead>
              <TableHead className="font-medium border-r border-muted px-6 py-4.5">
                Type
              </TableHead>
              <TableHead className="font-medium border-r border-muted px-6 py-4.5">
                Default
              </TableHead>
              <TableHead className="font-medium px-6 py-4.5">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((prop) => (
              <TableRow key={prop.property} className="border-muted ">
                <TableCell className="border border-muted border-r px-6 py-4.5">
                  {prop.property}
                </TableCell>
                <TableCell className="border border-muted border-r px-6 py-4.5">
                  {prop.type}
                </TableCell>
                <TableCell className="border border-muted border-r px-6 py-4.5">
                  {prop.default}
                </TableCell>
                <TableCell className="border border-muted leading-relaxed text-wrap text-sm px-6 py-4.5">
                  {prop.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PropsTable;
