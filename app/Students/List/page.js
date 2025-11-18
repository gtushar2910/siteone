"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Spacer,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";
import classNames from "../../../lib/tableClassNames";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Select Cohort"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const getStudents = async () => {
    const response = await axios.get(
      "/api/students/crud/r/getStudentsList?cohort=" + selectedValue
    );
    if (response) setStudents(response.data);
  };

  useEffect(() => {
    if (selectedValue !== "Select Cohort") getStudents();
  }, [selectedKeys]);

  const columns = [
    { name: "ENROLLMENT NO", uid: "enrollment_no" },
    { name: "NAME", uid: "name" },
    { name: "EMAIL", uid: "student_email" },
  ];

  const dropdownItems = [
    { key: "s22itd1", label: "Adm Year : 2022 (IT Div 1)" },
    { key: "s22itd2", label: "Adm Year : 2022 (IT Div 2)" },
    { key: "s22ai", label: "Adm Year : 2022 (AIDS)" },
    { key: "s23itd1", label: "Adm Year : 2023 (IT Div 1)" },
    { key: "s23itd2", label: "Adm Year : 2023 (IT Div 2)" },
    { key: "s23ai", label: "Adm Year : 2023 (AIDS)" },
    { key: "s24itd1", label: "Adm Year : 2024 (IT Div 1)" },
    { key: "s24itd2", label: "Adm Year : 2024 (IT Div 2)" },
    { key: "s24ai", label: "Adm Year : 2024 (AIDS)" },
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

      {/* 🔥 Header Row (Title + Dropdown Side-by-Side on Desktop) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">

        {/* Title */}
        <div
          className="
        rounded-2xl p-5 w-full md:w-auto text-center
        bg-[var(--card-bg)] 
        border border-[var(--card-border)] 
        shadow-md hover:shadow-xl 
        transition-all duration-300
      "
        >
         <h1 className="text-3xl font-bold text-[var(--accent-primary)] uppercase tracking-wide">
  Student List {selectedValue !== "Select Cohort" && `— ${selectedValue}`}
</h1>

        </div>

        {/* Cohort Dropdown */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
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
              items={dropdownItems}
              aria-label="Cohort Select"
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

      {/* 🔥 Scrollable Table Container */}
      <div
        className="
      rounded-xl 
      border border-[var(--card-border)]
      bg-[var(--card-bg)]
      shadow-md hover:shadow-xl
      transition duration-300
      overflow-hidden
    "
      >
        {/* Scroll wrapper */}
        <div className="overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[var(--accent-secondary)]">

          <Table
            aria-label="Student Table"
            classNames={classNames}
            isHeaderSticky
          >
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
