"use client"
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spacer } from '@nextui-org/react';
import { DocumentIcon } from '@heroicons/react/24/solid'
import classNames from "../../../lib/tableClassNames"

const StudentList = () => {

  const [students, setStudents] = useState([])
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Cohort"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const getStudents = async () => {
    const response = await axios.get("/api/students/crud/r/getStudentsList?cohort=" + selectedValue);
    if (response)
      setStudents(response.data)
  }

  useEffect(() => {
    getStudents()
  },[selectedKeys])

  const columns = [
    { name: "ENROLLMENT NO", uid: "enrollment_no" },
    { name: "NAME", uid: "name" },
    {name: "EMAIL ID", uid: "student_email"}
  ];

  const dropdownItems = [
    {
      key: "s20it",
      label: "s20it",
    },
    {
      key: "s21it",
      label: "s21it",
    },
    {
        key: "s21ai",
        label: "s21ai",
      },
    {
      key: "s22itd1",
      label: "s22itd1",
    },
    {
      key: "s22itd2",
      label: "s22itd2",
    },
    {
      key: "s22ai",
      label: "s22ai",
    },
    {
      key: "s23itd1",
      label: "s23itd1",
    },
    {
      key: "s23itd2",
      label: "s23itd2",
    },
    {
      key: "s23ai",
      label: "s23ai",
    },
    
  ];

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex flex-col">
            <p className="text-left ">{cellValue}</p>
          </div>
        );
      
      default:
        return (
            <div className="flex flex-col">
              <p className=" text-left ">{cellValue}</p>
            </div>
          );
    }
  }, []);

  return (
    <div className="px-4 py-4 cardAboutDept">
      <div className="flex flex-col items-center p-4  px-4 ">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="shadow"
              color='secondary'
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" items={dropdownItems} variant='solid' selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}>
            {(item) => (
              <DropdownItem
                key={item.key}
                color={item.key === "delete" ? "danger" : "default"}
                className={item.key === "delete" ? "text-danger" : ""}
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
        </div>
        <div className="flex flex-col p-4  px-4 ">
        <Spacer y={5} />

        <Table aria-label="Example table with custom cells" classNames={classNames}>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>
                <p className="text-left text-default-700">{column.name}</p>
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={students}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default StudentList
