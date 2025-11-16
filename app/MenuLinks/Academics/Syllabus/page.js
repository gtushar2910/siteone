"use client";

import React from "react";
import {
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
  Spacer,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DocumentIcon } from "@heroicons/react/24/solid";
import classNames from "../../../../lib/tableClassNames";

const SyllabusHome = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["IT"])); // default tab

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const getSubjects = async () => {
    // decide semester param for your API: if "IT" keep as is, otherwise pass numeric key
    const sem = selectedValue === "IT" ? "IT" : selectedValue;
    try {
      const response = await axios.get(
        "/api/subjects/getSemesterSubjects?semester=" + encodeURIComponent(sem)
      );
      if (response) setSubjects(response.data);
    } catch (err) {
      console.error("Failed fetching subjects:", err);
      setSubjects([]);
    }
  };

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKeys]);

  // Find latest eff value like "2025-26" safely
  const maxEff = React.useMemo(() => {
    if (!subjects || subjects.length === 0) return null;
    const effValues = subjects
      .map((s) => s.eff)
      .filter(Boolean)
      .sort((a, b) => {
        // try numeric-ish compare for YYYY or YYYY-YY; fallback to localeCompare
        if (/^\d{4}(-\d{2,4})?$/.test(a) && /^\d{4}(-\d{2,4})?$/.test(b)) {
          return a < b ? 1 : -1;
        }
        return a.localeCompare(b);
      });
    return effValues[0] ?? null;
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

  const renderCell = React.useCallback(
    (listItem, columnKey) => {
      const cellValue = listItem[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <div className="flex flex-col">
              <p className="font-semibold text-left text-[var(--foreground-color)]">
                {cellValue}
              </p>
            </div>
          );

        case "category":
          return (
            <div className="flex flex-col">
              <p className="font-semibold text-left text-[var(--foreground-color)]">
                {cellValue}
              </p>
            </div>
          );

        case "syllabus":
          return (
            <div className="flex justify-center">
              <Tooltip content="View Syllabus">
                <Link href={listItem?.syllabus_pdf ?? "#"} target="_blank">
                  <DocumentIcon
                    className="h-6 w-6 text-[var(--accent-primary)] hover:opacity-80"
                    aria-hidden
                  />
                </Link>
              </Tooltip>
            </div>
          );

        case "eff":
          return (
            <div
              className={`px-2 py-1 rounded text-center text-sm ${cellValue === maxEff
                ? "bg-indigo-200 font-semibold text-[var(--foreground-color)]"
                : "text-[var(--foreground-color)]"
                }`}
            >
              {cellValue}
            </div>
          );

        default:
          return <span className="text-[var(--foreground-color)]">{cellValue}</span>;
      }
    },
    [maxEff]
  );

  return (
    <div className="px-4 py-6 cardAboutDept">
      <div
        className="
          p-6 rounded-2xl 
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* <h2 className="text-2xl font-bold text-[var(--accent-primary)]">Syllabus</h2> */}

          <Tabs
            aria-label="Semester Tabs"
            selectedKey={Array.from(selectedKeys)[0]}
            onSelectionChange={(key) => setSelectedKeys(new Set([key.toString()]))}
            className="w-full my-4 flex justify-start"
            color="danger"
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
            }}

          >
            <Tab key="IT" title="IT Syllabus" />
            {dropdownItems.map((item) => (
              <Tab key={item.key} title={item.label} />
            ))}
          </Tabs>

        </div>

        <Spacer y={4} />

        <div
          className="
    rounded-xl overflow-hidden 
    border border-[var(--card-border)] 
    bg-[var(--card-bg)]
    shadow-md hover:shadow-xl
    transition-all duration-300
  "
        >
          <Table aria-label="Syllabus Table" classNames={classNames}>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  className="bg-[var(--table-header)] border-b border-[var(--card-border)] py-3"
                >
                  <p
                    className={`
    font-semibold tracking-wide text-[var(--accent-primary)]
    ${["CATEGORY", "NAME"].includes(column.name) ? "text-left" : "text-center"}
  `}
                  >
                    {column.name}
                  </p>
                </TableColumn>
              )}
            </TableHeader>

            <TableBody items={subjects}>
              {(item) => (
                <TableRow
                  key={item.id ?? `${item.code}-${item.eff}`}
                  className="
            transition-colors
            hover:bg-[var(--table-row-hover)]
            border-b border-[var(--card-border)]
            last:border-none
          "
                >
                  {(columnKey) => (
                    <TableCell className="py-3 justify-center text-center text-[var(--foreground-color)] font-medium">
                      {renderCell(item, columnKey)}
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

export default SyllabusHome;
