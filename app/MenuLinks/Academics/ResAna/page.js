"use client"
import React, { useState, useEffect, useCallback } from "react";
import {
  Table, TableHeader, TableColumn, TableBody,
  TableRow, TableCell, Tooltip, Link, Chip,
  Tabs, Tab, Button
} from "@nextui-org/react";
import { DocumentIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import axios from "axios";
import classNames from "../../../../lib/tableClassNames";

const columns = [
  { name: "ACADEMIC YEAR", uid: "year" },
  { name: "SEM 1", uid: "sem1" },
  { name: "SEM 2", uid: "sem2" },
  { name: "SEM 3", uid: "sem3" },
  { name: "SEM 4", uid: "sem4" },
  { name: "SEM 5", uid: "sem5" },
  { name: "SEM 6", uid: "sem6" },
  { name: "SEM 7", uid: "sem7" },
  { name: "SEM 8", uid: "sem8" },
];

const semColorMap = {
  sem1: "text-indigo-500",
  sem2: "text-amber-500",
  sem3: "text-indigo-600",
  sem4: "text-amber-600",
  sem5: "text-indigo-700",
  sem6: "text-amber-700",
  sem7: "text-indigo-800",
  sem8: "text-amber-800",
};

const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
};

const ResultAnalysis = () => {
  const [listIT, setListIT] = useState([]);
  const [listAIDS, setListAIDS] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("IT");

  const getList = async () => {
    setLoading(true);
    const response = await axios.get("/api/resana/getResultAnalysis");
    if (response) {
      const shiftA = response.data.filter(item => item.shift === 'A');
      const shiftAIDS = response.data.filter(item => item.shift === 'AIDS');
      setListIT(shiftA);
      setListAIDS(shiftAIDS);
    }
    setLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    if (columnKey === "year") {
      return <p className="text-center">{cellValue}</p>;
    }

    const iconColor = semColorMap[columnKey] ?? "text-slate-700";

    return (
      <div className="flex justify-center">
        {isValidUrl(cellValue) ? (
            <Link href={cellValue} target="_blank">
              <DocumentIcon className={`h-6 w-6 ${iconColor}`} />

            </Link>
        ) : (
          <Chip color="default" size="sm" variant="flat">N/A</Chip>
        )}
      </div>
    );
  }, []);

  const filteredData = selectedTab === "IT"
    ? listIT.filter(item => item.year.toLowerCase().includes(search.toLowerCase()))
    : listAIDS.filter(item => item.year.toLowerCase().includes(search.toLowerCase()));

  const handleExportCSV = () => {
    const dataToExport = filteredData;
    const csvHeader = columns.map(col => `"${col.name}"`).join(",");
    const csvRows = dataToExport.map(item =>
      columns.map(col => `"${item[col.uid] ?? ""}"`).join(",")
    );
    const csvContent = [csvHeader, ...csvRows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${selectedTab}-ResultAnalysis.csv`);
  };

  const handleUpload = () => {
    // Placeholder — connect this to modal/upload form later
    alert("Upload Result button clicked (connect to your form/modal).");
  };

  return (
    <div className="p-6 space-y-6 cardAboutDept">
      {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="🔍 Search by Academic Year..."
          className="border border-gray-300 p-3 rounded-md w-full sm:max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2">
          <Button color="primary" variant="bordered" onClick={handleUpload}>
            Upload Result
          </Button>
          <Button color="success" onClick={handleExportCSV}>
            Export CSV
          </Button>
        </div>
      </div> */}

      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key.toString())}
        aria-label="Department Tabs"
        className="w-full flex justify-start"
        variant="light"
        classNames={{
          base: "bg-[var(--card-bg)] rounded-full p-1 shadow-sm border border-[var(--card-border)] backdrop-blur-md inline-flex",
          tabList: "gap-1 rounded-full p-1 justify-start",
          cursor: "rounded-full bg-[var(--accent-primary)] shadow-md scale-105 transition-all duration-300",
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
        <Tab key="IT" title="Information Technology" />
        <Tab key="AIDS" title="Artificial Intelligence & Data Science" />
      </Tabs>


      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading...</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center text-gray-400 py-10 italic">No result data available.</div>
        ) : (
          <div
  className="
    rounded-xl overflow-hidden
    border border-[var(--card-border)]
    bg-[var(--card-bg)]
    shadow-md hover:shadow-xl
    transition-all duration-300
  "
>
  <Table
    isHeaderSticky
    aria-label={`Result table for ${selectedTab}`}
    className="max-h-[500px]"
    classNames={classNames}
  >
    <TableHeader columns={columns}>
      {(column) => (
        <TableColumn
          key={column.uid}
          className="
            bg-[var(--table-header)] 
            border-b border-[var(--card-border)] 
            py-3
          "
        >
          <p
            className={`
              font-semibold tracking-wide text-[var(--accent-primary)]
              ${["ACADEMIC YEAR"].includes(column.name) ? "text-center" : "text-center"}
            `}
          >
            {column.name}
          </p>
        </TableColumn>
      )}
    </TableHeader>

    <TableBody items={filteredData}>
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
              {renderCell(item, columnKey)}
            </TableCell>
          )}
        </TableRow>
      )}
    </TableBody>
  </Table>
</div>

        )}
      </motion.div>
    </div>
  );
};

export default ResultAnalysis;
