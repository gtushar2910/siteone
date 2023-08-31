import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import classNames from "@/lib/tableClassNames";
export default function UnAuthorizedPage({columns, publications, renderCell}) {

  return (
    <div className="grid grid-cols-1 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
        <div className="box-border p-4 border-2 px-4" >
          <Table aria-label="Example table with custom cells" classNames={classNames}>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid}>
                  <p className="text-center text-default-700">{column.name}</p>
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={publications}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
  );
}
