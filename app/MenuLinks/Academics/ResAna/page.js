"use client"
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spacer } from '@nextui-org/react';
import { DocumentIcon } from '@heroicons/react/24/solid'

const ResAnaHome = () => {

  const [semesters, setSemesters] = useState([])
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Academic Year"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const getSemesters = async () => {
    const response = await axios.get("/api/resana/getResAnaAcaYear?academic_year=" + selectedValue);
    if (response)
      setSemesters(response.data)
  }

  useEffect(() => {
    getSemesters()
  },[selectedKeys])



  const columns = [
    { name: "ACADEMIC YEAR", uid: "academic_year" },
    { name: "SEMESTER", uid: "semester" },
    { name: "VIEW", uid: "view" },
  ];

  const dropdownItems = [
    {
      key: "2022-23",
      label: "2022-23",
    },
    {
      key: "2021-22",
      label: "2021-22",
    },
    {
      key: "2020-21",
      label: "2020-21",
    },
    {
      key: "2019-20",
      label: "2019-20",
    }
  ];

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "academic_year":
        return (
          <div className="flex flex-col">
            <p className="font-bold	 text-left text-indigo-700">{cellValue}</p>
          </div>
        );
    case "semester":
            return (
              <div className="flex flex-col">
                <p className="font-bold	 text-left text-indigo-700">{cellValue}</p>
              </div>
            );
      case "view":
        return (
          <div className="flex flex-col ">
            <Tooltip content="View Syllabus"  >
              <Link href={listItem['file_url']}  color="primary"><DocumentIcon className="h-6 w-6 text-blue-500" /></Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
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

        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>
                <p className="text-left text-default-700">{column.name}</p>
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={semesters}>
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

export default ResAnaHome
