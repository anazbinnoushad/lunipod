import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import SectionTitle from "./SectionTitle";
const propsData = [
  {
    property: "to",
    type: "number",
    default: "–",
    description: "The target number to count up to.",
  },
  {
    property: "from",
    type: "number",
    default: "0",
    description: "The initial number from which the count starts.",
  },
  {
    property: "direction",
    type: "string",
    default: '"up"',
    description:
      'Direction of the count; can be "up" or "down". When this is set to "down", "from" and "to" become reversed, in order to count down.',
  },
  {
    property: "delay",
    type: "number",
    default: "0",
    description: "Delay in seconds before the counting starts.",
  },
  {
    property: "duration",
    type: "number",
    default: "2",
    description:
      "Duration of the count animation – based on the damping and stiffness configured inside the component.",
  },
  {
    property: "className",
    type: "string",
    default: '""',
    description: "CSS class to apply to the component for additional styling.",
  },
  {
    property: "startWhen",
    type: "boolean",
    default: "true",
    description:
      "A boolean to control whether the animation should start when the component is in view. It basically works like an if statement, if this is true, the count will start.",
  },
  {
    property: "separator",
    type: "string",
    default: '""',
    description:
      "Character to use as a thousands separator in the displayed number.",
  },
  {
    property: "onStart",
    type: "function",
    default: "–",
    description:
      "Callback function that is called when the count animation starts.",
  },
  {
    property: "onEnd",
    type: "function",
    default: "–",
    description:
      "Callback function that is called when the count animation ends.",
  },
];

const PropsTable = () => {
  return (
    <div>
      <SectionTitle className=" mt-4">Props</SectionTitle>
      <div className="border border-muted rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-muted">
              <TableHead className=" font-medium  border-r border-muted  px-6 py-4.5">
                Property
              </TableHead>
              <TableHead className=" font-medium  border-r border-muted px-6 py-4.5">
                Type
              </TableHead>
              <TableHead className=" font-medium  border-r border-muted px-6 py-4.5">
                Default
              </TableHead>
              <TableHead className=" font-medium  px-6 py-4.5">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {propsData.map((prop) => (
              <TableRow key={prop.property} className="border-muted">
                <TableCell className=" border border-muted border-r px-6 py-4.5">
                  {prop.property}
                </TableCell>
                <TableCell className="border border-muted  border-r px-6 py-4.5">
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
