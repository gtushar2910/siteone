"use client";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import classNames from "../../../lib/tableClassNames";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Select Batch"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const getStudents = async () => {
    if (selectedValue === "Select Batch") return;
    const response = await axios.get(
      "/api/students/crud/r/getStudentsList?cohort=" + selectedValue
    );
    if (response) setStudents(response.data);
  };

  useEffect(() => {
    getStudents();
  }, [selectedKeys]);

  const columns = [
    { name: "ENROLLMENT NO", uid: "enrollment_no" },
    { name: "NAME", uid: "name" },
    { name: "EMAIL", uid: "student_email" },
  ];

  const dropdownItems = [
    { key: "s05it", label: "Batch : 2005-2009" },
    { key: "s06it", label: "Batch : 2006-2010" },
    { key: "s07it", label: "Batch : 2007-2011" },
    { key: "s08it", label: "Batch : 2008-2012" },
    { key: "s09it", label: "Batch : 2009-2013" },
    { key: "s10it", label: "Batch : 2010-2014" },
    { key: "s11it", label: "Batch : 2011-2015" },
    { key: "s12it", label: "Batch : 2012-2016" },
    { key: "s13it", label: "Batch : 2013-2017" },
    { key: "s14it", label: "Batch : 2014-2018" },
    { key: "s15it", label: "Batch : 2015-2019" },
    { key: "s16it", label: "Batch : 2016-2020" },
    { key: "s17it", label: "Batch : 2017-2021" },
    { key: "s18it", label: "Batch : 2018-2022" },
    { key: "s19it", label: "Batch : 2019-2023" },
    { key: "s20it", label: "Batch : 2020-2024" },
    { key: "s21it", label: "Batch : 2021-2025" },
    { key: "s21ai", label: "Batch : 2021-2025 (AIDS)" },
  ];

  const renderCell = React.useCallback((row, columnKey) => {
    const cellValue = row[columnKey];
    return (
      <p className="text-left text-[var(--foreground-color)] font-medium">
        {cellValue}
      </p>
    );
  }, []);

  return (
    <div className="px-6 py-6 cardAboutDept">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 ">
        {/* 🔥 Header */}
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
            Student List
            {selectedValue !== "Select Batch" && (
              <span className="ml-2 font-normal text-lg">
                {selectedValue}
              </span>
            )}
          </h1>
        </div>

        {/* 🔥 Dropdown */}
        <div className="flex justify-center mb-6">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="shadow"
                className="
                px-6 py-3 font-semibold
                bg-[var(--accent-primary)] text-white
                hover:opacity-90 transition-all
              "
              >
                {selectedValue}
              </Button>
            </DropdownTrigger>

            <DropdownMenu
              aria-label="Batch Selector"
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              className="p-1"
            >
              {dropdownItems.map((item) => (
                <DropdownItem key={item.key}>{item.label}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>


      {/* 🔥 SCROLLABLE TABLE */}
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
          <Table aria-label="Student Table" isHeaderSticky classNames={classNames}>
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

            <TableBody items={students} emptyContent="No students found.">
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

export default StudentList;
