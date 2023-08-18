"use client"
import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SideNavbar from '@/components/NavBar/SideNavBar'
import { Card, CardHeader, CardBody, Image, Avatar } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useRouter,useSearchParams, usePathname  } from 'next/navigation'


const columnsValues = [
  { name: "NAME", uid: "name" },
  { name: "DESIGNATION/EXPERIENCE", uid: "designation" },
  { name: "QUALIFICATION", uid: "qualification" },
  { name: "SUBJECTS INVOLVED", uid: "area_of_int" },
];


const StaffHomePage = () => {

  const pathname = usePathname()

  const [staff, setStaff] = useState([])

  const getStaff = async () => {
     let email = pathname.slice(pathname.lastIndexOf('/') + 1)
    const response = await axios.get("/api/staff/getSingleStaffData?email=" + email);
    if (response)
      setStaff(response.data)
  }

  useEffect(() => {
    getStaff()
  }, [])


  return (
    <div className="flex flex-cols content-center px-4 py-4 cardAboutDept">
      <div>
        <SideNavbar staff={staff}/>
      </div>
      {/* <div className="flex items-center w-64">
        <Card className="px-4 py-4 bg-green">

          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={staff.photo}
              width={200}
            />
          </CardBody>
        </Card>
      </div> */}
        <div className="box-border p-4 border-2 px-4" >
          <Table hideHeader isStriped color="success" fullWidth aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
            </TableHeader>
            <TableBody>
            <TableRow key="0">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">Name</p></TableCell>
                <TableCell>{staff.name}</TableCell>
              </TableRow>
              <TableRow key="1">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">Qualification</p></TableCell>
                <TableCell>{staff.qualification}</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">Designation</p></TableCell>
                <TableCell>{staff.designation}</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">Department</p></TableCell>
                <TableCell>Information Technology</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">Experience</p></TableCell>
                <TableCell>{staff.experience}</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">Email</p></TableCell>
                <TableCell>{staff.email}</TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">Subjects Involved</p></TableCell>
                <TableCell>{staff.area_of_int}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    </div>
  )
}

export default StaffHomePage
