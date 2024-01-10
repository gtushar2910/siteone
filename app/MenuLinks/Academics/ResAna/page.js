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
            case "year":
                return (
                    <div className="flex flex-col">
                        <p className="text-center ">{cellValue}</p>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col items-center">
                      <Tooltip content="View"  >
                        <Link href={listItem[columnKey]} target="_blank" color="primary"><DocumentIcon className="h-6 w-6 text-slate-700" /></Link>
                      </Tooltip>
                    </div>
                  );
        }
    }, []);


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