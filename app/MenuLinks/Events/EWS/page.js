"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";

import { columns } from "./data";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { DocumentIcon } from '@heroicons/react/24/solid'
import classNames from "../../../../lib/tableClassNames";



const ConverseList = () => {

  const [list, setList] = useState([])

  const getList = async () => {
    const response = await axios.get("/api/events/ews/getList");
    if (response)
      setList(response.data)
  }

  useEffect(() => {
    getList()
  }, [])

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "type":
        return (
          <div className="flex flex-col">
            <p className="font-bold	 ">{cellValue}</p>
          </div>
        );
      case "event_dates":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm   ">{cellValue}</p>
          </div>
        );
      case "faculty_co":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm ">{cellValue}</p>
          </div>
        );
      case "expert":
        return (
          <div className="flex flex-col">
            <p className="text-left  ">{cellValue}</p>
          </div>
        );
      case "report":
        return (
          <div className="flex flex-col ">
            <Tooltip content="View Report"  >
              <Link href={listItem['report_url']} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-blue-500" /></Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="px-4 cardAboutDept font-sans">
      <div className="box-border p-4 border-0 px-4">
        <h1 className="font-sans text-4xl text-zinc-700 font-black uppercase text-center"> ----- Expert Talks / Workshops / STTPs -----</h1>
      </div>
      <div className="box-border p-4 border-2 px-4" >
        <Table aria-label="Example table with custom cells" classNames={classNames}>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>
                <p className="text-left ">{column.name}</p>
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