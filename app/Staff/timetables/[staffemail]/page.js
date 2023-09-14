"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import SideNavbar from '../../../../components/NavBar/SideNavBar'
import { usePathname } from 'next/navigation'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, useDisclosure } from "@nextui-org/react";
import { DocumentIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { EditIcon } from './icons/EditIcon';
import { TrashIcon } from '@heroicons/react/24/solid';
import AuthorizedPage from './AuthorizedPage';
import UnAuthorizedPage from './UnAuthorizedPage';
import AddEdit from './AddEdit';

const StaffHomePage = () => {
    const { data: session, status } = useSession();
    const user = session?.user;
    const isLoadingUser = status === 'loading';
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const pathname = usePathname()
    const [timetables, setTimeTables] = useState([])
    const [timetable, setTimeTable] = useState()
    const [staff, setStaff] = useState([])
    const [selectedId, setSelectedId] = useState("")

    const columns = [
        { name: "#", uid: "seqnum" },
        { name: "ACADEMIC YEAR", uid: "academic_year" },
        { name: "SEMESTER", uid: "semester" },
        { name: "VIEW", uid: "view" },
        { name: "ACTIONS", uid: "actions" },
    ];

    
  const AddEditClose = async () => {
    getTimeTables()
    onClose()
  }
    
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
          const response = await axios.put("/api/staff/crud/d/deleteTimeTable?id=" + id);
          getTimeTables()
        }
      };
    
      const editRow = async (
        listItem = null,
      ) => {
        if (confirm("Confirm Edit?")) {
          setSelectedId("Edit")
          setTimeTable(listItem)
          onOpen()
        }
      };

    const renderCell = React.useCallback((listItem, columnKey) => {
        const cellValue = listItem[columnKey];

        switch (columnKey) {
            case "semester":
                return (
                    <div className="flex flex-col">
                        <p className="font-normal	 text-center ">{cellValue}</p>
                    </div>
                );
            case "seqnum":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm  text-center text-green-700">{cellValue}</p>
                    </div>
                );
            case "view":
                return (
                    <div className="flex flex-col items-center">
                        <Tooltip content="View"  >
                            <Link href={listItem['tt_softcopy']} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-amber-500" /></Link>
                        </Tooltip>
                    </div>

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
              return (
                <div className="flex flex-col">
                    <p className="font-sans font-bold	text-zinc-700 text-center ">{cellValue}</p>
                </div>
            );
        }
    }, []);

    const getTimeTables = async () => {
        let email = pathname.slice(pathname.lastIndexOf('/') + 1)
        const response = await axios.get("/api/staff/crud/r/getTimeTables?email=" + email);
        if (response) {
            const data = response.data
            setStaff(data[0].staff)
            setTimeTables(data[1].timetables)
        }
    }

    useEffect(() => {
        getTimeTables()
    }, [])


    // return (
    //     <div className="flex flex-cols content-center px-4 py-4 cardAboutDept">
    //         <div>
    //             <SideNavbar staff={staff} />
    //         </div>
    //         <div>
    //             <div className='p-4'>
    //                 <h2 className="text-2xl font-extrabold dark:text-white">Faculty Time Table : {staff.name}</h2>
    //             </div>
    //             <div className="box-border p-4 border-2 px-4" >
    //                 <Table aria-label="Example table with custom cells">
    //                     <TableHeader columns={columns}>
    //                         {(column) => (
    //                             <TableColumn key={column.uid}>
    //                                 <p className="text-center text-default-700">{column.name}</p>
    //                             </TableColumn>
    //                         )}
    //                     </TableHeader>
    //                     <TableBody items={timetables}>
    //                         {(item) => (
    //                             <TableRow key={item.id}>
    //                                 {(columnKey) => <TableCell>{renderCell(item, columnKey)
    //                                 }</TableCell>}
    //                             </TableRow>

    //                         )}
    //                     </TableBody>
    //                 </Table>
    //             </div>
    //         </div>

    //     </div>
    // )
    return (
        <div className="flex flex-cols content-center px-4 py-4 cardAboutDept">
          <div>
            <SideNavbar staff={staff} />
          </div>
          {user ? (<><AuthorizedPage addRow={addRow} columns={columns} user={user} timetables={timetables} renderCell={renderCell} /></>) : (<><UnAuthorizedPage columns={columns.filter(function (column) {
            return column.name !== "ACTIONS";
          })} timetables={timetables} renderCell={renderCell} /></>)}
          <AddEdit id={selectedId} onClose={AddEditClose} timetable={timetable} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} staff_email={pathname.slice(pathname.lastIndexOf('/') + 1)} />
        </div>
      )
}

export default StaffHomePage
