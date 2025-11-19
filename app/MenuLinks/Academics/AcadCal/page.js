"use client";
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
      if (response) setList(response.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setList([]);
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
        return <p className="text-center font-semibold">{index + 1}</p>;

      case "academic_year":
      case "semester":
        return <p className="text-center font-medium text-[var(--foreground-color)]">{item[columnKey]}</p>;

      case "view":
        return (
          <div className="flex justify-center">
            
              <Link href={item.ac_pdf} target="_blank">
                <DocumentIcon className="h-6 w-6 text-[var(--accent-primary)] hover:scale-110 transition-all duration-200" />
              </Link>
            
          </div>
        );

      default:
        return item[columnKey];
    }
  }, []);

  return (
    <div className="p-6 cardAboutDept">
      <div
        className="
          p-6 rounded-2xl 
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          shadow-md hover:shadow-xl 
          transition-all duration-300
        "
      >
        {/* 🔥 Premium Crimson Tabs */}
        <Tabs
          selectedKey={selected}
          onSelectionChange={setSelected}
          aria-label="Academic Calendar Options"
          className="w-full flex justify-start"
          variant="light"
          classNames={{
            base: "bg-[var(--card-bg)] rounded-full p-1 shadow-sm border border-[var(--card-border)] backdrop-blur-md inline-flex",
            tabList: "gap-1 rounded-full p-1 justify-start",
            cursor: "rounded-full bg-[var(--accent-primary)] shadow-md scale-105 transition-transform duration-300",
            tab: `
              px-4 py-2 rounded-full transition-all duration-300 
              text-[var(--foreground-color)] font-medium 
              data-[selected=true]:text-white 
              data-[selected=true]:font-semibold 
              data-[selected=true]:shadow-md 
              data-[selected=true]:bg-[var(--accent-primary)] 
              data-[selected=true]:scale-105
              hover:bg-[var(--table-row-hover)]
            `,
            tabContent: "flex gap-2 items-center",
          }}
        >
          <Tab
            key="University"
            title={
              <>
                <AcademicCapIcon className="h-5 w-5 text-[var(--accent-primary)]" />
                <span>University Academic Calendar</span>
              </>
            }
          />
        </Tabs>

        {/* 🔥 Table Wrapper */}
        <div
          className="
            mt-6 rounded-xl overflow-hidden 
            border border-[var(--card-border)] 
            bg-[var(--card-bg)]
            shadow-md hover:shadow-xl
            transition-all duration-300
          "
        >
          <Table
            aria-label="Academic Calendar Table"
            className="max-h-[500px]"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  className="bg-[var(--table-header)] border-b border-[var(--card-border)] py-3"
                >
                  <p
                    className={`
                      font-semibold tracking-wide text-[var(--accent-primary)]
                      ${column.uid === "seqnum" ? "text-center" : "text-center"}
                    `}
                  >
                    {column.name}
                  </p>
                </TableColumn>
              )}
            </TableHeader>

            <TableBody items={list}>
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
                    <TableCell className="py-3 text-[var(--foreground-color)] font-medium">
                      {renderCell(item, columnKey, list.indexOf(item))}
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

export default AcademicCalender;
