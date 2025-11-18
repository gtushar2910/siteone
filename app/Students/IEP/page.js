"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@nextui-org/react";
import classNames from "../../../lib/tableClassNames";
import axios from "axios";

const IEPList = () => {
  const columns = [
    { name: "YEAR", uid: "year" },
    { name: "STUDENT NAME", uid: "name" },
    { name: "ENROLLMENT NO", uid: "enrollment_no" },
    { name: "EMAIL", uid: "email" },
  ];

  const [list, setList] = useState([]);

  const getList = async () => {
    const response = await axios.get(
      "/api/students/crud/r/getIEPStudentsList"
    );
    if (response) setList(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "year":
        return (
          <p className="text-center font-semibold text-[var(--accent-primary)]">
            {cellValue}
          </p>
        );
      case "name":
        return (
          <p className="text-left text-[var(--foreground-color)] font-medium">
            {cellValue}
          </p>
        );
      case "enrollment_no":
      case "email":
        return (
          <p className="text-center text-[var(--foreground-color)] font-medium">
            {cellValue}
          </p>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="px-6 py-8 cardAboutDept">

      {/* 🔥 Page Title */}
      <div
        className="
          rounded-2xl p-5 mb-6 text-center
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
      >
        <h1 className="text-3xl font-bold text-[var(--accent-primary)] uppercase tracking-wide">
          International Experience Program (IEP)
        </h1>
        <Divider className="mt-4 bg-[var(--accent-secondary)] opacity-40" />
      </div>

      {/* 🔥 Table Container */}
      <div
        className="
          rounded-xl overflow-hidden
          border border-[var(--card-border)]
          bg-[var(--card-bg)]
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
      >
        {/* Scrollable wrapper */}
        <div className="overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-[var(--accent-secondary)] scrollbar-track-transparent">

          <Table aria-label="IEP Student List" isHeaderSticky classNames={classNames}>

            {/* Header */}
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  className="
                    bg-[var(--table-header)]
                    border-b border-[var(--card-border)]
                    py-3
                    shadow-sm
                  "
                >
                  <p className="font-semibold tracking-wide text-[var(--accent-primary)] text-center">
                    {column.name}
                  </p>
                </TableColumn>
              )}
            </TableHeader>

            {/* Rows */}
            <TableBody items={list} emptyContent="No IEP data found.">
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
                    <TableCell className="py-3">
                      {renderCell(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>

          </Table>

        </div>
      </div>
    </div>
  );
};

export default IEPList;
