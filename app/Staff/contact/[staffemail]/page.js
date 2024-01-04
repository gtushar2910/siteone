"use client"
import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SideNavbar from '../../../../components/NavBar/SideNavBar'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { InformationCircleIcon } from '@heroicons/react/24/solid';

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
  })
  return (
    <div className="flex flex-cols content-center px-4 py-4 cardAboutDept">
      <div>
        <SideNavbar staff={staff} />
      </div>

        <Card className="h-1/2 px-4 py-4">
          <CardHeader className="flex gap-3">
            <InformationCircleIcon className="h-6 w-6 text-blue-500"/>
            <div className="flex flex-col">
              <p className="text-md">Contact</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{staff.name}</p>
            <p>{staff.address}</p>
            <p>Contact : {staff.contact}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href={`mailto:${staff.email}`}
            >
              Email : {staff.email}
            </Link>
          </CardFooter>
        </Card>
      </div>
  )
}

export default StaffHomePage
