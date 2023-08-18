"use client"
import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SideNavbar from '@/components/NavBar/SideNavBar'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { usePathname } from 'next/navigation'


const StaffPublications = () => {

  const pathname = usePathname()

  const [staff, setStaff] = useState([])
  const [publications, setPublications] = useState([])

  const getStaffData = async () => {
    let email = pathname.slice(pathname.lastIndexOf('/') + 1)
    const response = await axios.get("/api/staff/getStaffPublications?email=" + email);
    if (response) {
      const data = response.data
      setStaff(data[0].staff)
      setPublications(data[1].publications)
    }

  }

  const columns = [
    { name: "#", uid: "seqnum" },
    { name: "Publications", uid: "description" },
  ];

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];
    return (
      <div className="flex flex-col">
        <p className="font-bold	 text-left text-zinc-700">{cellValue}</p>
      </div>
    );
  }, []);

  useEffect(() => {
    getStaffData()
  })


  return (
    <div className="flex flex-cols content-center px-4 py-4 cardAboutDept">
      <div>
        <SideNavbar staff={staff} />
      </div>
      <div className="grid grid-cols-1 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
        <div className="box-border p-4 border-2 px-4" >
          <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid}>
                  <p className="text-center text-default-700">{column.name}</p>
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={publications}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

    </div>
  )
}

export default StaffPublications
