"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { columns, users } from "./data";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from "next/link";
import classNames from "../../../lib/tableClassNames";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const StaffList = () => {

  const [staffs, setStaffs] = useState([])

  const getStaffList = async () => {
    const response = await axios.get("/api/staff/getStaffList");
    if (response)
      setStaffs(response.data)
  }

  useEffect(() => {
    getStaffList()
  }, [])

  const renderCell = React.useCallback((staff, columnKey) => {
    const cellValue = staff[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: staff.photo }}
            description={(
              <Link href={`/Staff/${staff.email}`} size="sm" isExternal>
                {staff.email}
              </Link>
            )}
            name={cellValue}
          >
            {staff.email}
          </User>
        );
      case "designation":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{staff.experience}</p>
          </div>
        );
      case "qualification":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "area_of_int":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      // case "actions":
      //   return (
      //     <div className="relative flex items-center gap-2">
      //       <Tooltip content="Details">
      //         <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
      //           <EyeIcon />
      //         </span>
      //       </Tooltip>
      //       <Tooltip content="Edit user">
      //         <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
      //           <EditIcon />
      //         </span>
      //       </Tooltip>
      //       <Tooltip color="danger" content="Delete user">
      //         <span className="text-lg text-danger cursor-pointer active:opacity-50">
      //           <DeleteIcon />
      //         </span>
      //       </Tooltip>
      //     </div>
      //   );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="grid grid-cols-1 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
      <div className="box-border p-4 border-2 px-4" >
        <Table aria-label="Example table with custom cells" classNames={classNames}>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={staffs}>
            {(item) => (
              <TableRow key={item.email}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>

  );
}



export default StaffList