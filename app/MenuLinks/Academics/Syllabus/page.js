"use client"
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spacer } from '@nextui-org/react';
import { DocumentIcon } from '@heroicons/react/24/solid'
import classNames from "../../../../lib/tableClassNames"

const SyllabusHome = () => {

  const [subjects, setSubjects] = useState([])
  const [semester, setSemester] = useState(1)
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Semester"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const refreshTable = () => {

  }

  const getSubjects = async () => {
    const response = await axios.get("/api/subjects/getSemesterSubjects?semester=" + selectedValue);
    if (response)
      setSubjects(response.data)
  }

  useEffect(() => {
    getSubjects()
  },[selectedKeys])



  const columns = [
    { name: "SUBCODE", uid: "code" },
    { name: "NAME", uid: "name" },
    { name: "CATEGORY", uid: "category" },
    { name: "EFF FROM", uid: "eff" },
    { name: "L", uid: "lpw" },
    { name: "T", uid: "tpw" },
    { name: "P", uid: "ppw" },
    { name: "CREDIT", uid: "credit" },
    { name: "SYLLABUS", uid: "syllabus" },
  ];

  const dropdownItems = [
    {
      key: "1",
      label: "Sem I",
    },
    {
      key: "2",
      label: "Sem II",
    },
    {
      key: "3",
      label: "Sem III",
    },
    {
      key: "4",
      label: "Sem IV",
    },
    {
      key: "5",
      label: "Sem V",
    },
    {
      key: "6",
      label: "Sem VI",
    },
    {
      key: "7",
      label: "Sem VII",
    },
    {
      key: "8",
      label: "Sem VIII",
    }
  ];

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex flex-col">
            <p className="font-bold	 text-left ">{cellValue}</p>
          </div>
        );
      case "syllabus":
        return (
          <div className="flex flex-col ">
            <Tooltip content="View Syllabus"  >
              <Link href={listItem['syllabus_pdf']} target="_blank" ><DocumentIcon className="h-6 w-6 text-amber-500" /></Link>
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

        <Table aria-label="Example table with custom cells" classNames={classNames}>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>
                <p className="text-left text-default-700">{column.name}</p>
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={subjects}>
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

export default SyllabusHome
