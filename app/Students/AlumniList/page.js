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
      key: "s05it",
      label: "Batch : 2005-2009",
    },
    {
      key: "s06it",
      label: "Batch : 2006-2010",
    },
    {
        key: "s07it",
        label: "Batch : 2007-2011",
      },
    {
      key: "s08it",
      label: "Batch : 2008-2012",
    },
    {
      key: "s09it",
      label: "Batch : 2009-2013",
    },
    {
      key: "s10it",
      label: "Batch : 2010-2014",
    },
    {
      key: "s11it",
      label: "Batch : 2011-2015",
    },
    
    {
      key: "s12it",
      label: "Batch : 2012-2016",
    },
    {
      key: "s13it",
      label: "Batch : 2013-2017",
    },
    {
      key: "s14it",
      label: "Batch : 2014-2018",
    },
    {
      key: "s15it",
      label: "Batch : 2015-2019",
    },
    {
      key: "s16it",
      label: "Batch : 2016-2020",
    },
    {
      key: "s17it",
      label: "Batch : 2017-2021",
    },
    {
      key: "s18it",
      label: "Batch : 2018-2022",
    },
    {
      key: "s19it",
      label: "Batch : 2019-2023",
    },
    {
      key: "s20it",
      label: "Batch : 2020-2024",
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
