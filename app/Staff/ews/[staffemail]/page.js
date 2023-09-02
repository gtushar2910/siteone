"use client"
import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SideNavbar from '../../../../components/NavBar/SideNavBar'
import { usePathname } from 'next/navigation'
import UnAuthorizedPage from './UnAuthorizedPage';
import { useSession } from 'next-auth/react';
import AuthorizedPage from './AuthorizedPage';
import { Chip, Tooltip, useDisclosure } from '@nextui-org/react';
import { EditIcon } from './icons/EditIcon';
import { TrashIcon } from '@heroicons/react/24/solid';
import AddEdit from './AddEdit';

const statusColorMap = {
  JOURNAL: "primary",
  BOOK: "secondary",
  CONFERENCE: "warning",
};


const StaffProfile = () => {

  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === 'loading';
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
  const pathname = usePathname()
  const [staff, setStaff] = useState([])
  const [profiles, setProfiles] = useState([])
  const [profile, setProfile] = useState()
  const [selectedId, setSelectedId] = useState("")

  const getStaffData = async () => {
    let email = pathname.slice(pathname.lastIndexOf('/') + 1)
    const response = await axios.get("/api/staff/crud/r/getProfiles?email=" + email);
    if (response) {
      const data = response.data
      setStaff(data[0].staff)
      setProfiles(data[1].profiles)
    }

  }

  const columns = [
    { name: "#", uid: "seqnum" },
    { name: "TYPE", uid: "type" },
    { name: "DESCRIPTION", uid: "description" },
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
      const response = await axios.put("/api/staff/crud/d/deleteProfile?id=" + id);
    }
  };

  const editRow = async (
    listItem = null,
  ) => {
    if (confirm("Confirm Edit?")) {
      setSelectedId("Edit")
      setProfile(listItem)
      onOpen()
    }
  };

  const renderCell = React.useCallback((listItem, columnKey) => {
    const cellValue = listItem[columnKey];

    switch (columnKey) {
      case "type":
        return (
          <Chip className="capitalize" color={statusColorMap[listItem.type]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
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
        return cellValue;
    }
  }, []);

  useEffect(() => {
    getStaffData()
  })


  return (
    <div className="flex flex-cols content-center px-4 py-4 cardAboutDept">
      <div>
        <SideNavbar staff={staff} />
      </div>
      {/* <AuthorizedPage addRow={addRow} columns={columns} user={user} profiles={profiles} renderCell={renderCell} /> */}
      {/* <UnAuthorizedPage columns={columns} profiles={profiles} renderCell={renderCell} /> */}
      {/* <AddEdit id={selectedId} onClose={onClose} profile={profile} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} staff_email={pathname.slice(pathname.lastIndexOf('/') + 1)}/> */}
      {user ? (<><AuthorizedPage addRow={addRow} columns={columns} user={user} profiles={profiles} renderCell={renderCell} /></>) : (<><UnAuthorizedPage columns={columns} profiles={profiles} renderCell={renderCell} /></>)}
      <AddEdit id={selectedId} onClose={onClose} profile={profile} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} staff_email={pathname.slice(pathname.lastIndexOf('/') + 1)}/>
    </div>
  )
}

export default StaffProfile
