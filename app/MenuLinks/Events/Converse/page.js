"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Row, Col, Tooltip, Link } from "@nextui-org/react";

import { columns } from "./data";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



const StaffList = () => {

  const [list, setList] = useState([])

  const getList = async () => {
    const response = await axios.get("/api/events/converse/getList");
    if (response)
      setList(response.data)
  }

  useEffect(() => {
    getList()
  }, [])

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];
    const report_url = listItem['report_url']

    switch (columnKey) {
      case "name":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "event_dates":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "faculty_co":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "student_co":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "report":
        return (
              <Tooltip content="View Report"  >
              <Link href={listItem['report_url']} target="_blank" color="primary">pdf</Link>
              </Tooltip>
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
              <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                {column.name}
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



export default StaffList