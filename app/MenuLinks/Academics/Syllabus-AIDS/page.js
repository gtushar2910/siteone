"use client";
import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Link,
  Spacer
} from "@nextui-org/react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DocumentIcon } from '@heroicons/react/24/solid';
import classNames from "../../../../lib/tableClassNames";

const SyllabusHome = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Semester"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const getSubjects = async () => {
    const response = await axios.get("/api/subjects/getSemesterSubjectsAIDS?semester=" + selectedValue);
    if (response) setSubjects(response.data);
  };

  useEffect(() => {
    getSubjects();
  }, [selectedKeys]);

  // Get the latest eff like "2025-26"
  const maxEff = React.useMemo(() => {
    const effValues = subjects.map(sub => sub.eff);
    return effValues.sort().reverse()[0]; // Latest academic year string
  }, [subjects]);

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
    { key: "1", label: "Sem I" },
    { key: "2", label: "Sem II" },
    { key: "3", label: "Sem III" },
    { key: "4", label: "Sem IV" },
    { key: "5", label: "Sem V" },
    { key: "6", label: "Sem VI" },
    { key: "7", label: "Sem VII" },
    { key: "8", label: "Sem VIII" },
  ];

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex flex-col">
            <p className="font-bold text-left">{cellValue}</p>
          </div>
        );
      case "syllabus":
        return (
          <div className="flex flex-col">
            <Tooltip content="View Syllabus">
              <Link href={listItem['syllabus_pdf']} target="_blank">
                <DocumentIcon className="h-6 w-6 text-amber-500" />
              </Link>
            </Tooltip>
          </div>
        );
      case "eff":
        return (
          <div className={`p-1 rounded text-center ${cellValue === maxEff ? "bg-green-100 font-semibold" : ""}`}>
            {cellValue}
          </div>
        );
      default:
        return cellValue;
    }
  }, [maxEff]);

  return (
    <div className="px-4 py-4 cardAboutDept">
      <div className="flex flex-col items-center px-4">
        {/* <Dropdown>
          <DropdownTrigger>
            <Button variant="shadow" color="secondary">
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dynamic Actions"
            items={dropdownItems}
            variant="solid"
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            {(item) => (
              <DropdownItem key={item.key}>
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown> */}
         <Tabs
          aria-label="Semester Tabs"
          selectedKey={Array.from(selectedKeys)[0]}
          onSelectionChange={(key) => setSelectedKeys(new Set([key.toString()]))}
          color="secondary"
          variant="bordered"
          className="w-full justify-center"
        >
          <Tab key="AIDS" title="AIDS Syllabus" />
          {dropdownItems.map((item) => (
            <Tab key={item.key} title={item.label} />
          ))}
        </Tabs>
      </div>

      <div className="flex flex-col px-4">
        <Spacer y={5} />
        <Table aria-label="Syllabus Table" classNames={classNames}>
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
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SyllabusHome;
