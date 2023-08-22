"use client"
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";
import CalTable from "./CalTable";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { DocumentIcon } from '@heroicons/react/24/solid'

import { AcademicCapIcon, BriefcaseIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";

const AcademicCalender = () => {

  const [list, setList] = useState([])
  const [selected, setSelected] = React.useState("University");

  const getList = async () => {
    const response = await axios.get("/api/acadcal/getCalenders?ucd=" + selected);
    if (response)
      setList(response.data)
  }

  useEffect(() => {
    getList()
  }, [selected])

  const columns = [
    { name: "#", uid: "seqnum" },
    { name: "ACADEMIC YEAR", uid: "academic_year" },
    { name: "SEMESTER", uid: "semester" },
    { name: "VIEW", uid: "view" },
  ];

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "semester":
        return (
          <div className="flex flex-col">
            <p className="font-bold	 text-center text-indigo-700">{cellValue}</p>
          </div>
        );
      case "academic_year":
        return (
          <div className="flex flex-col">
            <p className="font-bold	 text-center text-indigo-700">{cellValue}</p>
          </div>
        );
      case "seqnum":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm  text-center text-green-700">{cellValue}</p>
          </div>
        );
      case "view":
        return (
          <div className="flex flex-col items-center">
            <Tooltip content="View Time Tables"  >
              <Link href={listItem['ac_pdf']} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-blue-500" /></Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);



  return (
    <div className="grid grid-cols-1 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
      <div className="flex flex-col box-border items-center p-4 border-2 px-4" >
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" color="secondary" size="lg" variant="shadow" selectedKey={selected}
            onSelectionChange={setSelected}>
            <Tab
              key="University"
              title={
                <div className="flex items-center space-x-2">
                  <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                  <span>University Academic Calender</span>
                </div>
              }
            >
              <CalTable columns={columns} list={list} renderCell={renderCell}/>
            </Tab>
            <Tab
              key="College"
              title={
                <div className="flex items-center space-x-2">
                  <BuildingLibraryIcon className="h-6 w-6 text-blue-500" />
                  <span>College Academic Calender</span>
                </div>
              }
            >
              <CalTable columns={columns} list={list} renderCell={renderCell}/>
            </Tab>
            <Tab
              key="Department"
              title={
                <div className="flex items-center space-x-2">
                  <BriefcaseIcon className="h-6 w-6 text-blue-500" />
                  <span>Department Academic Calender</span>
                </div>
              }
            >
              <CalTable columns={columns} list={list} renderCell={renderCell}/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div >
  );
}
export default AcademicCalender