"use client"
import React, { useState, useEffect, useCallback } from "react";
import {
  Tabs, Tab, Tooltip, Link,
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell
} from "@nextui-org/react";
import { DocumentIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import CalTable from "./CalTable";

const AcademicCalender = () => {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState("University");

  const getList = async () => {
    try {
      const response = await axios.get(`/api/acadcal/getCalenders?ucd=${selected}`);
      if (response) setList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getList();
  }, [selected]);

  const columns = [
    { name: "Sr. No.", uid: "seqnum" },
    { name: "ACADEMIC YEAR", uid: "academic_year" },
    { name: "SEMESTER", uid: "semester" },
    { name: "VIEW", uid: "view" },
  ];

  const renderCell = useCallback((item, columnKey, index) => {
    switch (columnKey) {
      case "seqnum":
        return (
          <p className="text-center font-semibold">{index + 1}</p>
        );
      case "academic_year":
      case "semester":
        return (
          <p className="text-center font-medium">{item[columnKey]}</p>
        );
      case "view":
        return (
          <div className="flex justify-center">
            <Tooltip content="View Calendar" placement="top">
              <Link href={item.ac_pdf} target="_blank">
                <DocumentIcon className="h-6 w-6 text-blue-600 hover:scale-110 transition-transform duration-150" />
              </Link>
            </Tooltip>
          </div>
        );
      default:
        return item[columnKey];
    }
  }, []);

  return (
    <div className="p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <Tabs
          aria-label="Academic Calendar Options"
          color="secondary"
          size="lg"
          variant="solid"
          selectedKey={selected}
          onSelectionChange={setSelected}
          classNames={{
            tabList: "bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-xl",
            tab: "px-4 py-2 rounded-xl font-semibold text-gray-700",
            tabContent: "flex gap-2 items-center",
          }}
        >
          <Tab
            key="University"
            title={
              <>
                <AcademicCapIcon className="h-5 w-5 text-blue-600" />
                <span>University Academic Calendar</span>
              </>
            }
          >
            <CalTable
              columns={columns}
              list={list}
              renderCell={(item, key) => renderCell(item, key, list.indexOf(item))}
            />
          </Tab>

          {/* You can uncomment these later if you want to include college and department level too */}
          {/* <Tab key="College" title={<><BuildingLibraryIcon className="h-5 w-5 text-green-600" /><span>College</span></>}>...</Tab> */}
          {/* <Tab key="Department" title={<><BriefcaseIcon className="h-5 w-5 text-purple-600" /><span>Department</span></>}>...</Tab> */}
        </Tabs>
      </div>
    </div>
  );
};

export default AcademicCalender;
