"use client"
import React, { Suspense } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Link } from "@nextui-org/react";
import classNames from "../../../../lib/tableClassNames";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { DocumentIcon } from '@heroicons/react/24/solid'




const ForeignStudentsList = () => {

    const columns = [
        { name: "ADMISSION YEAR", uid: "year" },
        { name: "SEM 1", uid: "sem1" },
        { name: "SEM 2", uid: "sem2" },
        { name: "SEM 3", uid: "sem3" },
        { name: "SEM 4", uid: "sem4" },
        { name: "SEM 5", uid: "sem5" },
        { name: "SEM 6", uid: "sem6" },
        { name: "SEM 7", uid: "sem7" },
        { name: "SEM 8", uid: "sem8" },
    ];

    const [list, setList] = useState([])

    const getList = async () => {
        const response = await axios.get("/api/resana/getResultAnalysis");
        if (response)
            setList(response.data)
    }

    useEffect(() => {
        getList()
    }, [])

    const renderCell = React.useCallback((listItem, columnKey) => {
        const cellValue = listItem[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <div className="flex flex-col">
                        <p className=" ">{cellValue}</p>
                    </div>
                );
            case "year":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold  text-center ">{cellValue}</p>
                    </div>
                );
            case "enrollment_no":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-center">{cellValue}</p>
                    </div>
                );
            case "email":
                return (
                    <div className="flex flex-col">
                        <p className="text-center  ">{cellValue}</p>
                    </div>
                );
            default:
              return (
                <div className="flex flex-col">
                    <p className="text-center  ">{cellValue}</p>
                </div>
            );
        }
    }, []);

    // const classNames = React.useMemo(
    //   () => ({
    //     th: ["bg-orange-100","font-sans","font-bold"],
    //     td: [
    //       // changing the rows border radius
    //       // first
    //       "group-data-[first=true]:first:before:rounded-none",
    //       "group-data-[first=true]:last:before:rounded-none",
    //       // middle
    //       "group-data-[middle=true]:before:rounded-none",
    //       // last
    //       "group-data-[last=true]:first:before:rounded-none",
    //       "group-data-[last=true]:last:before:rounded-none",
    //       "bg-amber-50",
    //       "text-zinc-700",
    //       "font-sans",
    //       "font-medium"
    //     ],
    //   }),
    //   [],
    // );

    return (
        <div className="px-4 cardAboutDept " >
            <div className="box-border p-4 border-0 px-4">
                <h1 className="font-sans text-4xl text-zinc-700 font-black uppercase text-center"> ----- Result Analysis -----</h1>
            </div>
            <div className="p-4  px-4 items-center  " >
                <Table aria-label="Example table with custom cells" classNames={classNames} >
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid}>
                                <p className="text-center">{column.name}</p>
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={list} >
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}



export default ForeignStudentsList