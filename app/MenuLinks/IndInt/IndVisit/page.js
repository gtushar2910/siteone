"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Link,
  Divider,
} from "@nextui-org/react";
import axios from "axios";
import { DocumentIcon } from "@heroicons/react/24/solid";
import classNames from "../../../../lib/tableClassNames";
import { columns } from "./data";

const IndustrialVisits = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    const response = await axios.get("/api/indint/indvisit/getList");
    if (response) setList(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const renderCell = React.useCallback((listItem, columnKey) => {
    switch (columnKey) {
      case "place":
      case "event_dates":
      case "faculty_co":
        return (
          <p className="text-[var(--foreground-color)] font-medium">
            {listItem[columnKey]}
          </p>
        );

      case "report":
        return listItem.report_url ? (
          
            <Link href={listItem.report_url} target="_blank">
              <DocumentIcon
                className="h-6 w-6 text-[var(--accent-primary)] hover:scale-110 transition-all"
              />
            </Link>
          
        ) : (
          <p className="italic text-gray-400">N/A</p>
        );

      default:
        return listItem[columnKey];
    }
  }, []);

  return (
    <div className="px-4 py-6 cardAboutDept">
      {/* 🔥 Page Title */}
      <div
        className="
          text-center mb-6
          p-4 rounded-2xl
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
      >
        <h1 className="text-3xl font-bold text-[var(--accent-primary)] uppercase tracking-wide">
          Industrial Visits
        </h1>
        <Divider className="mt-3 bg-[var(--accent-secondary)] opacity-40" />
      </div>

      {/* 🔥 Premium Table Card */}
      <div
        className="
          rounded-xl overflow-hidden
          border border-[var(--card-border)]
          bg-[var(--card-bg)]
          shadow-md hover:shadow-xl
          transition-all duration-300
          p-2
        "
      >
        <Table aria-label="Industrial Visit Table" classNames={classNames}>
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

          <TableBody items={list} emptyContent="No records found.">
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
                  <TableCell className="py-3 text-[var(--foreground-color)]">
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default IndustrialVisits;
