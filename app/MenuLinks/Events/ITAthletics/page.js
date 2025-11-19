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
  Tooltip,
  Link
} from "@nextui-org/react";
import axios from "axios";
import classNames from "../../../../lib/tableClassNames";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { columns } from "./data";

const ITAthleticsList = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    const response = await axios.get("/api/events/ita/getList");
    if (response) setList(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const renderCell = React.useCallback((item, columnKey) => {
    const value = item[columnKey];

    switch (columnKey) {
      case "event_dates":
        return (
          <p className="text-center font-medium text-[var(--foreground-color)]">
            {value}
          </p>
        );

      case "faculty_co":
        return (
          <p className="text-left font-medium text-[var(--foreground-color)]">
            {value}
          </p>
        );

      case "report":
        return (
          <div className="flex justify-center">
            {item.report_url ? (
              <Tooltip content="View Report">
                <Link href={item.report_url} target="_blank">
                  <DocumentIcon className="h-6 w-6 text-[var(--accent-primary)] hover:scale-110 transition-all" />
                </Link>
              </Tooltip>
            ) : (
              <p className="italic text-gray-400">N/A</p>
            )}
          </div>
        );

      default:
        return value;
    }
  }, []);

  return (
    <div className="px-6 py-8 cardAboutDept">

      {/* 🔥 HEADER CARD */}
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
          IT Athletics
        </h1>
        <Divider className="mt-4 bg-[var(--accent-secondary)] opacity-40" />
      </div>

      {/* 🔥 TABLE CONTAINER */}
      <div
        className="
          rounded-xl overflow-hidden
          border border-[var(--card-border)]
          bg-[var(--card-bg)]
          shadow-md hover:shadow-xl
          transition duration-300
        "
      >
        <div className="overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-[var(--accent-secondary)] scrollbar-track-transparent">

          <Table aria-label="IT Athletics Table" isHeaderSticky classNames={classNames}>
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
                  <p className="font-semibold tracking-wide text-[var(--accent-primary)] text-left">
                    {column.name}
                  </p>
                </TableColumn>
              )}
            </TableHeader>

            <TableBody items={list} emptyContent="No Athletics Events Found.">
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

export default ITAthleticsList;
