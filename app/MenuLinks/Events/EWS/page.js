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
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Pagination
} from "@nextui-org/react";
import axios from "axios";
import classNames from "../../../../lib/tableClassNames";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { columns, statusOptions } from "./data";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { capitalize } from "./utils";

const EWSList = () => {
  const [list, setList] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "seqnum",
    direction: "ascending",
  });

  // FETCH DATA
  const getList = async () => {
    const response = await axios.get("/api/events/ews/getList");
    if (response) setList(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  // FILTER ITEMS
  const filteredItems = React.useMemo(() => {
    let items = [...list];
    if (statusFilter !== "all") {
      items = items.filter((item) =>
        Array.from(statusFilter).includes(item.type)
      );
    }
    return items;
  }, [list, statusFilter]);

  // PAGINATION
  const pages = Math.ceil(filteredItems.length / rowsPerPage);
  const items = filteredItems.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  // SORTING
  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const x = a[sortDescriptor.column];
      const y = b[sortDescriptor.column];
      return sortDescriptor.direction === "ascending"
        ? x < y ? -1 : x > y ? 1 : 0
        : x > y ? -1 : x < y ? 1 : 0;
    });
  }, [items, sortDescriptor]);

  // RENDER CELL
  const renderCell = React.useCallback((item, columnKey) => {
    const value = item[columnKey];

    switch (columnKey) {
      case "type":
        return <p className="font-semibold text-[var(--accent-primary)]">{value}</p>;

      case "event_dates":
        return <p className="text-center text-[var(--foreground-color)] font-medium">{value}</p>;

      case "faculty_co":
        return <p className="text-left font-medium">{value}</p>;

      case "expert":
        return <p className="text-left font-medium">{value}</p>;

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

  // TOP FILTER BAR
  const topContent = (
    <div className="flex justify-between items-center py-2">
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="shadow"
            endContent={<ChevronDownIcon className="text-sm" />}
            className="bg-[var(--accent-primary)] text-white px-5 py-2"
          >
            Filter by Type
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          selectionMode="single"
          selectedKeys={statusFilter}
          onSelectionChange={setStatusFilter}
        >
          {statusOptions.map((s) => (
            <DropdownItem key={s.uid} className="capitalize">
              {capitalize(s.name)}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );

  // BOTTOM PAGINATION
  const bottomContent = (
    <div className="flex justify-center py-3">
      <Pagination
        total={pages}
        page={page}
        showControls
        onChange={setPage}
        color="primary"
      />
    </div>
  );

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
          Expert Talks / Workshops / STTPs
        </h1>
        <Divider className="mt-4 bg-[var(--accent-secondary)] opacity-40" />
      </div>

      {/* 🔥 TABLE WRAPPER */}
      <div
        className="
          rounded-xl overflow-hidden
          border border-[var(--card-border)]
          bg-[var(--card-bg)]
          shadow-md hover:shadow-xl
          transition duration-300
        "
      >
        <div className="overflow-y-auto max-h-[560px] scrollbar-thin scrollbar-thumb-[var(--accent-secondary)] scrollbar-track-transparent">

          <Table
            aria-label="EWS Table"
            classNames={classNames}
            isHeaderSticky
            topContent={topContent}
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            sortDescriptor={sortDescriptor}
            onSortChange={setSortDescriptor}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  allowsSorting
                  className="
                    bg-[var(--table-header)]
                    border-b border-[var(--card-border)]
                    py-3
                  "
                >
                  <p className="text-left text-[var(--accent-primary)] font-semibold tracking-wide">
                    {column.name}
                  </p>
                </TableColumn>
              )}
            </TableHeader>

            <TableBody items={sortedItems} emptyContent="No records found.">
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

export default EWSList;
