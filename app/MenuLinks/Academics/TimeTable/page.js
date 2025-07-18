"use client"
import React, { useEffect, useState, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Link,
  Card,
  CardHeader,
  CardBody
} from "@nextui-org/react";
import { DocumentIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const TimeTableHome = () => {
  const [list, setList] = useState([]);

  const columns = [
    { name: "#", uid: "seqnum" },
    { name: "SEMESTER", uid: "semester" },
    { name: "VIEW", uid: "view" },
  ];

  const getList = async () => {
    const response = await axios.get("/api/timetable/getTimeTables");
    if (response && response.data) {
      const dataWithIndex = response.data.map((item, index) => ({
        ...item,
        seqnum: index + 1,
      }));
      setList(dataWithIndex);
    }
  };


  useEffect(() => {
    getList();
  }, []);

  const renderCell = useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "semester":
        return (
          <p className="font-semibold text-center text-indigo-600">
            {cellValue}
          </p>
        );
      case "seqnum":
        return (
          <p className="text-center text-green-600 font-medium">
            {cellValue}
          </p>
        );
      case "view":
        return (
          <div className="flex justify-center">
            <Tooltip content="View Time Table">
              <Link href={listItem["tt_pdf"]} target="_blank">
                <DocumentIcon className="h-6 w-6 text-blue-500 hover:text-blue-700 transition-colors" />
              </Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="p-6">
      <Card shadow="sm" className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex justify-between items-center border-b border-default-200">
          <h2 className="text-2xl font-bold text-default-700">
            Class & Faculty Time Tables
          </h2>
        </CardHeader>
        <CardBody className="p-4">
          <Table
            aria-label="Class Time Tables"
            isStriped
            className="rounded-md shadow-sm"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid} className="text-center">
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={list}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>

          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default TimeTableHome;
