"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { DocumentIcon } from '@heroicons/react/24/solid'

const ConverseList = () => {

  const [list, setList] = useState([])

  const columns = [
    {name: "DESCRIPTION", uid: "description"},
    {name: "VIEW", uid: "view"},
  ];

  const getList = async () => {
    const response = await axios.get("/api/exams/practical/getPracticalExamLists");
    if (response)
      setList(response.data)
  }

  useEffect(() => {
    getList()
  }, [])

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "description":
        return (
          <div className="flex flex-col">
            <p className="font-bold	 text-center text-indigo-700">{cellValue}</p>
          </div>
        );
    
      case "view":
        return (
          <div className="flex flex-col items-center">
            <Tooltip content="View Report"  >
              <Link href={listItem['tt_pdf']} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-blue-500" /></Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="grid grid-cols-1 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
      <div className="box-border p-4 border-2 px-4" >
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>
                <p className="text-center text-default-700">{column.name}</p>
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={list}>
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



export default ConverseList