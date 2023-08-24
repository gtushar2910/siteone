"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { DocumentIcon } from '@heroicons/react/24/solid'




const TimeTableHome = () => {

  const [list, setList] = useState([])

  const columns = [
    { name: "#", uid: "seqnum" },
    { name: "SEMESTER", uid: "semester" },
    { name: "VIEW", uid: "view" },
  ];

  const getList = async () => {
    const response = await axios.get("/api/timetable/getTimeTables");
    if (response)
      setList(response.data)
  }

  useEffect(() => {
    getList()
  }, [])

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];
   
    switch (columnKey) {
      case "semester":
        return (
          <div className="flex flex-col">
            <p className="font-bold	 text-center text-indigo-700">{cellValue}</p>
          </div>
        );
      case "seqnum":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm  text-center text-green-700">{cellValue}</p>
          </div>
        );
      case "view":
        return (
          <div className="flex flex-col items-center">
            <Tooltip content="View Time Tables"  >
              <Link href={listItem['tt_pdf']} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-blue-500" /></Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="px-4 cardAboutDept">
      <div className="box-border p-4 border-0 px-4">
      <h2 class="text-2xl font-extrabold text-default-600 dark:text-white">Class & Faculty Time Tables</h2>
      </div>
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
                {(columnKey) => <TableCell>{renderCell(item, columnKey)
                 }</TableCell>}
              </TableRow>
          
            )}
          </TableBody>
        </Table>
      </div>
    </div>

  );
}



export default TimeTableHome