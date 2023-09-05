import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";
import classNames from '../../../../lib/tableClassNames';
const CalTable = ({columns, list, renderCell}) => {
  return (
      <Table aria-label="Example table with custom cells" classNames={classNames}>
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.uid}>
                      <p className="text-center ">{column.name}</p>
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={list}>
                  {(item) => (
                    <TableRow key={item.id}>
                      {(columnKey) => <TableCell>{renderCell(item, columnKey)
                      }</TableCell>}
                    </TableRow>

                  )}
                </TableBody>
              </Table>
  )
}

export default CalTable
