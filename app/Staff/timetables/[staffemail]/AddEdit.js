import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useState } from "react";


export default function AddEdit({ id, isOpen, onOpen, onClose, onOpenChange, timetable, staff_email }) {
    const [disableSaveChanges, setDisableSaveChanges] = React.useState(false)
    const [seqnum, setSeqnum] = React.useState(0)
    const [academic_year, setAcademicYear] = React.useState("")
    const [semester, setSemester] = React.useState("")
    const [tt_softcopy, setTimeTablePdf] = React.useState("")
    const router = useRouter();


    useEffect(() => {
        if (id == "New") {
            setAcademicYear("")
            setSemester("")
            setTimeTablePdf("")
            return;
        }
        if (timetable) {
            setSeqnum(timetable.seqnum)
            setAcademicYear(timetable.academic_year)
            setSemester(timetable.semester)
            setTimeTablePdf(timetable.tt_softcopy)
        }
    }, [timetable, id]);

    const saveChanges = async (
    ) => {
        console.log(seqnum + " " + academic_year + " " + semester + " " + tt_softcopy)
        if (academic_year == "" || semester == "" || tt_softcopy == "") {
            alert("Please Enter All the Values!!!");
        } else {

            if (id == "Edit") {
                const response = await axios.post('/api/staff/crud/u/updateTimeTable', {
                    seqnum: Number(seqnum),
                    academic_year: academic_year,
                    semester: semester,
                    tt_softcopy: tt_softcopy,
                    id: timetable.id
                });
            } else if (id == "New") {
                const response = await axios.post('/api/staff/crud/c/createTimeTable', {
                    seqnum: Number(seqnum),
                    academic_year: academic_year,
                    semester: semester,
                    tt_softcopy: tt_softcopy,
                    staff_email: staff_email
                });
            }
            onClose()
            router.refresh()
        }
    };


    return (
        <>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add/Edit timetables</ModalHeader>
                            <ModalBody>
                                <Input
                                    isDisabled
                                    type="text"
                                    label="id"
                                    defaultValue={id == "New" ? "New" : timetable.id}
                                    className="max-w-xs"
                                />
                                <Spacer y={1} />
                                <Input type="text" isRequired placeholder="Enter Sequence Number" value={seqnum} onValueChange={setSeqnum} />
                                <Spacer y={1} />
                                <Input type="text" isRequired placeholder="Enter Academic Year" value={academic_year} onValueChange={setAcademicYear} />
                                <Spacer y={1} />
                                <Input type="text" isRequired placeholder="Enter Semester" value={semester} onValueChange={setSemester} />
                                <Spacer y={1} />
                                <Input type="text" isRequired placeholder="Enter Time Table URL" value={tt_softcopy} onValueChange={setTimeTablePdf} />
                                <Spacer y={1} />

                            </ModalBody>
                            <ModalFooter>
                                <button
                                        class="px-6 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 skew-y-6 bg-blue-600 border-b-4 border-blue-800 rounded shadow-lg shadow-blue-600/50 hover:transform-none hover:border-blue-600" disabled={disableSaveChanges} onClick={saveChanges}>Save Changes</button>
                                 <button
                                        class="px-4 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 skew-y-6 bg-red-600 border-b-4 border-red-800 rounded shadow-lg shadow-red-600/50 hover:transform-none hover:border-red-600" onClick={onClose}>Close</button>
                              
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
