"use client"
import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SideNavbar from '@/components/NavBar/SideNavBar'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { TableCellsIcon } from '@heroicons/react/24/solid';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
import { DocumentIcon } from '@heroicons/react/24/solid'

const StaffHomePage = () => {

    const pathname = usePathname()

    const [timetables, setTimeTables] = useState([])
    const [staff, setStaff] = useState([])

    const columns = [
        { name: "ACADEMIC YEAR", uid: "academic_year" },
        { name: "SEMESTER", uid: "semester" },
        { name: "VIEW", uid: "view" },
    ];

    const renderCell = React.useCallback((listItem, columnKey) => {
        const cellValue = listItem[columnKey];

        switch (columnKey) {
            case "semester":
                return (
                    <div className="flex flex-col">
                        <p className="font-bold	 text-center text-indigo-700">{cellValue}</p>
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
                            <Link href={listItem['tt_softcopy']} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-blue-500" /></Link>
                        </Tooltip>
                    </div>

                );
            default:
                return cellValue;
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


    return (
        <div className="flex flex-cols content-center px-4 py-4 cardAboutDept">
            <div>
                <SideNavbar staff={staff} />
            </div>
            <div>
                <div className='p-4'>
                    <h2 className="text-2xl font-extrabold dark:text-white">Faculty Time Table : {staff.name}</h2>
                </div>
                <div className="box-border p-4 border-2 px-4" >
                    <Table aria-label="Example table with custom cells">
                        <TableHeader columns={columns}>
                            {(column) => (
                                <TableColumn key={column.uid}>
                                    <p className="text-center text-default-700">{column.name}</p>
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={timetables}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    {(columnKey) => <TableCell>{renderCell(item, columnKey)
                                    }</TableCell>}
                                </TableRow>

                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>
    )
}

export default StaffHomePage
