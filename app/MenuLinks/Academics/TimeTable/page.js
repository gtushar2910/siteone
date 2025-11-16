"use client";
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
    try {
      const response = await axios.get("/api/timetable/getTimeTables");
      if (response?.data) {
        const dataWithIndex = response.data.map((item, index) => ({
          ...item,
          seqnum: index + 1,
        }));
        setList(dataWithIndex);
      }
    } catch (err) {
      console.error("Error fetching timetable:", err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const renderCell = useCallback((item, columnKey) => {
    switch (columnKey) {
      case "semester":
        return (
          <p className="font-semibold text-center text-[var(--foreground-color)]">
            {item.semester}
          </p>
        );

      case "seqnum":
        return (
          <p className="text-center font-semibold text-[var(--accent-primary)]">
            {item.seqnum}
          </p>
        );

      case "view":
        return (
          <div className="flex justify-center">
            
              <Link href={item.tt_pdf} target="_blank">
                <DocumentIcon className="h-6 w-6 text-[var(--accent-primary)] hover:scale-110 transition-transform duration-200" />
              </Link>
            
          </div>
        );

      default:
        return item[columnKey];
    }
  }, []);

  return (
    <div className="p-6 cardAboutDept">
      <Card
        className="
          w-full max-w-4xl mx-auto 
          rounded-2xl
          bg-[var(--card-bg)] 
          border border-[var(--card-border)]
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
      >
        <CardHeader className="flex justify-between items-center border-b border-[var(--card-border)] pb-3">
          <h2 className="text-2xl font-bold text-[var(--accent-primary)]">
            Class & Faculty Time Tables
          </h2>
        </CardHeader>

        <CardBody className="p-4">
          <div
            className="
              rounded-xl overflow-hidden 
              border border-[var(--card-border)] 
              bg-[var(--card-bg)]
              shadow-sm
            "
          >
            <Table aria-label="Class Time Tables">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    className="
                      bg-[var(--table-header)] 
                      border-b border-[var(--card-border)]
                      py-3
                    "
                  >
                    <p
                      className={`
                        font-semibold tracking-wide text-[var(--accent-primary)]
                        ${column.uid === "seqnum" ? "text-center" : "text-center"}
                      `}
                    >
                      {column.name}
                    </p>
                  </TableColumn>
                )}
              </TableHeader>

              <TableBody items={list}>
                {(item) => (
                  <TableRow
                    key={item.id}
                    className="
                      hover:bg-[var(--table-row-hover)]
                      transition-colors
                      border-b border-[var(--card-border)]
                      last:border-none
                    "
                  >
                    {(columnKey) => (
                      <TableCell className="py-3 text-[var(--foreground-color)] font-medium text-center">
                        {renderCell(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TimeTableHome;
