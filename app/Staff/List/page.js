"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
} from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import classNames from "../../../lib/tableClassNames";

const StaffList = () => {
  const [staffs, setStaffs] = useState([]);

  const getStaffList = async () => {
    const response = await axios.get("/api/staff/getStaffList");
    if (response) setStaffs(response.data);
  };

  useEffect(() => {
    getStaffList();
  }, []);

  const renderCell = (staff, columnKey) => {
    const cellValue = staff[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            className="transition-all duration-200"
            avatarProps={{
              radius: "full",
              src: staff.photo,
              className:
                "shadow-md hover:shadow-xl border-2 border-[#F3C5C5] bg-white",
            }}
            description={
              <Link
                href={`/Staff/${staff.email}`}
                className="text-sm text-[var(--accent-primary)] hover:underline"
              >
                {staff.email}
              </Link>
            }
            name={
              <span className="font-semibold text-[var(--foreground-color)]">
                {cellValue}
              </span>
            }
          />
        );

      case "designation":
        return (
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-[var(--foreground-color)]">
              {cellValue}
            </p>
            <p className="text-xs text-gray-500">{staff.experience}</p>
          </div>
        );

      case "qualification":
      case "area_of_int":
        return (
          <p className="text-sm font-medium text-[var(--foreground-color)] capitalize">
            {cellValue}
          </p>
        );

      default:
        return cellValue;
    }
  };

  return (
    <div className="px-4 py-6 cardAboutDept">
      {/* Crimson Glass Card */}
      <div
        className="
          p-6 rounded-2xl border border-[var(--card-border)]
          bg-[var(--card-bg)] shadow-lg
          hover:shadow-xl transition-all duration-300
        "
      >
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 border-b-[3px] pb-2 border-[var(--accent-secondary)]">
          Staff Details
        </h2>

        <Table
          aria-label="Staff Table"
          classNames={classNames}
          removeWrapper
          shadow="none"
          className="rounded-xl overflow-hidden"
        >
          <TableHeader>
            {[
              { uid: "name", name: "Name" },
              { uid: "designation", name: "Designation" },
              { uid: "qualification", name: "Qualification" },
              { uid: "area_of_int", name: "Areas of Interest" },
            ].map((col) => (
              <TableColumn
                key={col.uid}
                className="
                  bg-[var(--table-header)]
                  text-[var(--accent-primary)]
                  font-semibold tracking-wide
                "
              >
                {col.name}
              </TableColumn>
            ))}
          </TableHeader>

          <TableBody items={staffs}>
            {(item) => (
              <TableRow
                key={item.email}
                className="
                  hover:bg-[var(--table-row-hover)]
                  transition-all cursor-pointer
                  border-b border-[var(--card-border)]
                "
              >
                {(columnKey) => (
                  <TableCell className="py-3 font-medium bg-[var(--table-row-bg)]">
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StaffList;
