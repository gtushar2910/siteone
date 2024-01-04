"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavbar from '../../../../components/NavBar/SideNavBar'
import { usePathname } from 'next/navigation'
import UnAuthorizedPage from './UnAuthorizedPage';
import { useSession } from 'next-auth/react';
import AuthorizedPage from './AuthorizedPage';
import { Tooltip, useDisclosure } from '@nextui-org/react';
import { EditIcon } from './icons/EditIcon';
import { TrashIcon } from '@heroicons/react/24/solid';
import AddEdit from './AddEdit';
import Link from 'next/link';
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { LinkIcon } from '@heroicons/react/24/solid'


const StaffTeachings = () => {

  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === 'loading';
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const pathname = usePathname()
  const [staff, setStaff] = useState([])
  const [teachings, setTeachings] = useState([])
  const [teaching, setTeaching] = useState()
  const [selectedId, setSelectedId] = useState("")
  const [pathEmail, setPathEmail] = useState("")

  const getStaffTeachings = async () => {
    let email = pathname.slice(pathname.lastIndexOf('/') + 1)
    setPathEmail(email)
    const response = await axios.get("/api/staff/crud/r/getTeachings?email=" + email);
    if (response) {
      const data = response.data
      setStaff(data[0].staff)
      setTeachings(data[1].teachings)
    }

  }

  const AddEditClose = async () => {
    getStaffTeachings()
    onClose()
  }

  const columns = [
    { name: "ACADEMIC YEAR", uid: "academic_year" },
    { name: "SEMESTER", uid: "semester" },
    { name: "CLASS NAME", uid: "classname" },
    { name: "SUBJECT", uid: "subject_name" },
    { name: "SUBJECT CODE", uid: "subject_code" },
    { name: "COURSE DATA", uid: "actions" },
    { name: "EDIT", uid: "edit" },
  ];

  const addRow = async (
    id = null,
  ) => {
    if (confirm("Confirm Add?")) {
      setSelectedId("New")
      onOpen()
    }
  };

  const deleteRow = async (
    id = null,
  ) => {
    if (confirm("Confirm Delete?")) {
      const response = await axios.put("/api/staff/crud/d/deleteTeaching?id=" + id);
      getStaffTeachings()
    }
  };

  const editRow = async (
    listItem = null,
  ) => {
    if (confirm("Confirm Edit?")) {
      setSelectedId("Edit")
      setTeaching(listItem)
      onOpen()
    }
  };

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="View Syllabus"  >
              <Link href={listItem['syllabus_url']} target="_blank" color="primary"><DocumentTextIcon className="h-6 w-6 text-yellow-500" /></Link>
            </Tooltip>
            <Tooltip content="Course URL"  >
              <Link href={listItem['course_url']} target="_blank" color="primary"><LinkIcon className="h-6 w-6 text-purple-500" /></Link>
            </Tooltip>
            <Tooltip content="MATERIALS"  >
              <Link href={listItem['materials_url']} target="_blank" color="primary"><BookOpenIcon className="h-6 w-6 text-blue-500" /></Link>
            </Tooltip>
            <Tooltip content="MIDTERM"  >
              <Link href={listItem['midterm_url']} target="_blank" color="primary"><BookOpenIcon className="h-6 w-6 text-red-500" /></Link>
            </Tooltip>
            <Tooltip content="TUTORIAL"  >
              <Link href={listItem['tutorial_url']} target="_blank" color="primary"><BookOpenIcon className="h-6 w-6 text-zinc-500" /></Link>
            </Tooltip>
          </div>
        );
      case "edit":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => editRow(listItem)}>
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip content="Delete">
              <span onClick={() => deleteRow(listItem.id)} className="h-6 w-6 text-red-500">
                <TrashIcon />
              </span>
            </Tooltip>

          </div>
        );
      default:
        return (
          <div className="flex flex-col">
            <p className="font-bold	 text-default-500">{cellValue}</p>
          </div>
        );
    }
  }, []);

  useEffect(() => {
    getStaffTeachings()
  }, [])


  return (
    <div className="flex flex-cols content-center px-4 py-4 cardAboutDept">
      <div>
        <SideNavbar staff={staff} />
      </div>
      {user && user.email == pathEmail ? (<><AuthorizedPage addRow={addRow} columns={columns} user={user} teachings={teachings} renderCell={renderCell} /></>) : (<><UnAuthorizedPage columns={columns.filter(function (column) {
        return column.name !== "EDIT";
      })} teachings={teachings} renderCell={renderCell} /></>)}
      <AddEdit id={selectedId} onClose={AddEditClose} teaching={teaching} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} staff_email={pathname.slice(pathname.lastIndexOf('/') + 1)} />
    </div>
  )
}

export default StaffTeachings
