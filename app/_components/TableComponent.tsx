import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { StaticImageData } from "next/image";
interface Coin {
  name: string;
  price: number;
  logo: StaticImageData;
  fullName: string;
  id: number;
  gain: string;
  address: string;
}
interface ChildrenProps {
  type: string;
  crypto: string;
  amount: number;
  address: string;
  status: string;
  id: number;
}

interface TableProps {
  coin: Coin;
  transactions: ChildrenProps[];
}

const TableComponent: React.FC<TableProps> = ({ coin, transactions }) => {
  return (
    <Table
      removeWrapper
      classNames={{
        base: "bg-[rgb(40,37,83)] p-2  	rounded-lg",
        table: "bg-[rgb(40,37,83)]  	rounded-lg ",
        thead: "bg-[rgb(40,37,83)]  rounded-lg  ",
        tbody: "bg-[rgb(40,37,83)]  rounded-lg  ",
        tr: "bg-[rgb(40,37,83)] rounded-lg ",
        th: "bg-[rgb(24,22,51)]  pl-10 text-[12px] ",
        td: "bg-[rgb(40,37,83)] opacity-75 pl-10 pt-4 pb-4  lg:text-[16px] mobile:text-[4px]   bg-[rgb(24,22,51)] ",
        tfoot: "bg-[rgb(40,37,83)] rounded-lg ",
        sortIcon: "bg-[rgb(40,37,83)] rounded-lg ",
        emptyWrapper: "bg-[rgb(40,37,83)] rounded-lg ",
      }}
      fullWidth={false}
      aria-label="Example empty table "
    >
      <TableHeader>
        <TableColumn>TYPE</TableColumn>
        <TableColumn>AMOUNT</TableColumn>
        <TableColumn>TO</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {transactions.map((item, index) =>
          coin?.name === item?.crypto ? (
            <TableRow key={index}>
              <TableCell>{item.type}</TableCell>
              <TableCell className="font-[1000] ">{item.amount} </TableCell>
              <TableCell>{item.address.split(":").join(" : ")}</TableCell>
              <TableCell
                className={`${
                  item.status === "confirmed"
                    ? "text-[rgb(38,167,109)]"
                    : "text-[rgb(188,182,166)]"
                } `}
              >
                {item.status.toUpperCase()}
              </TableCell>
            </TableRow>
          ) : (
            <TableRow className="hidden" key={index}>
              <TableCell className="font-[1000]">{null}</TableCell>
              <TableCell className="font-[1000]">{null}</TableCell>
              <TableCell className="font-[1000]">{null}</TableCell>
              <TableCell className="font-[1000]">{null}</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
