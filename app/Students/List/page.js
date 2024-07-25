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
      label: "Adm Year : 2020 (IT)",
    },
    {
      key: "s21it",
      label: "Adm Year : 2021 (IT)",
    },
    {
        key: "s21ai",
        label: "Adm Year : 2021 (AIDS)",
      },
    {
      key: "s22itd1",
      label: "Adm Year : 2022 (IT Div 1)",
    },
    {
      key: "s22itd2",
      label: "Adm Year : 2022 (IT Div 2)",
    },
    {
      key: "s22ai",
      label: "Adm Year : 2022 (AIDS)",
    },
    {
      key: "s23itd1",
      label: "Adm Year : 2023 (IT Div 1)",
    },
    {
      key: "s23itd2",
      label: "Adm Year : 2023 (IT Div 2)",
    },
    {
      key: "s23ai",
      label: "Adm Year : 2023 (AIDS)",
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
