"use client"
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";
import CalTable from "./CalTable";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { DocumentIcon } from '@heroicons/react/24/solid'

import { ArrowsPointingInIcon, ArrowsPointingOutIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

const ExamSchedules = () => {

  const [list, setList] = useState([])
  const [internalList, setInternalList] = useState([])
  const [externalList, setExternalList] = useState([])
  const [midtermList, setMidTermList] = useState([])
  const [selected, setSelected] = React.useState("INTERNAL");

  const getList = async () => {
    const response = await axios.get("/api/exams/schedules/getSchedules");
    if (response)
      setList(response.data)
  }

  useEffect(() => {
    getList()
    setInternalList(list.filter(function(item) {
      return item.type === "INTERNAL"
    }))
    setExternalList(list.filter(function(item) {
      return item.type === "EXTERNAL"
    }))
    setMidTermList(list.filter(function(item) {
      return item.type === "MIDTERM"
    }))
  },[selected])

  const columns = [
    { name: "TYPE", uid: "type" },
    { name: "ACADEMIC YEAR", uid: "academic_year" },
    { name: "SEMESTER", uid: "semester" },
    { name: "CLASS NAME", uid: "classname" },
    { name: "SCHEDULE", uid: "schedule" },
    { name: "SEATING ARRANGEMENT", uid: "sa" },
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
      case "type":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm  text-center text-green-700">{cellValue}</p>
          </div>
        );
      case "schedule":
        return (
          <div className="flex flex-col items-center">
            <Tooltip content="View Schedule"  >
              <Link href={listItem['tt_pdf']} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-blue-500" /></Link>
            </Tooltip>
          </div>
        );
      case "sa":
        return (
           <div className="flex flex-col items-center">
            <Tooltip content="View Seating Arrangement"  isDisabled={!listItem['seating_arrangement']}>
              <Link href={listItem['seating_arrangement']} isDisabled={!listItem['seating_arrangement']} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-zinc-500" /></Link>
            </Tooltip>
          </div>
        );
      default:
        return (
          <div className="flex flex-col">
            <p className="font-bold	 text-center text-default-700">{cellValue}</p>
          </div>
        );
    }
  }, []);



  return (
    <div className="grid grid-cols-1 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
      <div className="flex flex-col box-border items-center p-4 border-2 px-4" >
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" color="secondary" size="lg" variant="shadow" selectedKey={selected}
            onSelectionChange={setSelected}>
            <Tab
              key="INTERNAL"
              title={
                <div className="flex items-center space-x-2">
                  <ArrowsPointingInIcon className="h-6 w-6 text-blue-500" />
                  <span>INTERNAL</span>
                </div>
              }
            >
              <CalTable columns={columns} list={internalList} renderCell={renderCell}/>
            </Tab>
            <Tab
              key="EXTERNAL"
              title={
                <div className="flex items-center space-x-2">
                  <ArrowsPointingOutIcon className="h-6 w-6 text-blue-500" />
                  <span>EXTERNAL</span>
                </div>
              }
            >
              <CalTable columns={columns} list={externalList} renderCell={renderCell}/>
            </Tab>
            <Tab
              key="MIDTERM"
              title={
                <div className="flex items-center space-x-2">
                  <PencilSquareIcon className="h-6 w-6 text-blue-500" />
                  <span>MID TERM</span>
                </div>
              }
            >
              <CalTable columns={columns} list={midtermList} renderCell={renderCell}/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div >
  );
}
export default ExamSchedules