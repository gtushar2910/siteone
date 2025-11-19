"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SideNavbar from "../../../components/NavBar/SideNavBar";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardBody,
  CardHeader,
  Image
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import classNames from "../../../lib/tableClassNames";

const StaffHomePage = () => {
  const pathname = usePathname();
  const [staff, setStaff] = useState([]);

  const getStaff = async () => {
    let email = pathname.slice(pathname.lastIndexOf("/") + 1);
    const response = await axios.get("/api/staff/getSingleStaffData?email=" + email);
    if (response) setStaff(response.data);
  };

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <div className="flex gap-6 px-4 py-6 cardAboutDept">

      {/* 🟥 Side Navbar */}
      <div>
        <SideNavbar staff={staff} />
      </div>

      {/* 🟥 Profile + Details */}
      <div
        className="
          flex-1 p-6 rounded-2xl
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
      >
        {/* ---------- Profile Header Card ---------- */}
        <Card
          className="
            w-full mb-6
            bg-[var(--card-bg)]
            border border-[var(--card-border)]
            shadow-sm
          "
        >
          <CardHeader className="flex gap-6 items-center">
            {/* <Image
              alt="Profile Photo"
              src={staff.photo}
              width={120}
              height={120}
              className="
                rounded-full border-2 border-[var(--card-border)] 
                shadow-md
              "
            /> */}
            <div>
              <h1 className="text-2xl font-bold text-[var(--accent-primary)]">
                {staff.name}
              </h1>
              <p className="text-[var(--foreground-color)] font-medium">
                {staff.designation}
              </p>
              <p className="text-[var(--foreground-color)] opacity-80 text-sm">
                Information Technology Department
              </p>
            </div>
          </CardHeader>
        </Card>

        {/* ---------- Details Table ---------- */}
        <div
          className="
            rounded-xl overflow-hidden
            border border-[var(--card-border)]
            bg-[var(--card-bg)]
            shadow-sm
          "
        >
          <Table aria-label="Staff Details" classNames={classNames}>
            <TableHeader>
              <TableColumn>DETAIL</TableColumn>
              <TableColumn>INFORMATION</TableColumn>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="font-bold text-[var(--accent-primary)]">
                  Name
                </TableCell>
                <TableCell className="text-[var(--foreground-color)]">
                  {staff.name}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold text-[var(--accent-primary)]">
                  Qualification
                </TableCell>
                <TableCell>{staff.qualification}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold text-[var(--accent-primary)]">
                  Designation
                </TableCell>
                <TableCell>{staff.designation}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold text-[var(--accent-primary)]">
                  Department
                </TableCell>
                <TableCell>Information Technology</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold text-[var(--accent-primary)]">
                  Experience
                </TableCell>
                <TableCell>{staff.experience}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold text-[var(--accent-primary)]">
                  Email
                </TableCell>
                <TableCell>{staff.email}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-bold text-[var(--accent-primary)]">
                  Subjects Involved
                </TableCell>
                <TableCell>{staff.area_of_int}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default StaffHomePage;
