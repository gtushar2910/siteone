import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function AddEdit({ id, isOpen, onOpen, onClose, onOpenChange, timetable, staff_email }) {

    const [seqnum, setSeqnum] = React.useState(0)
    const [academic_year, setAcademicYear] = React.useState("")
    const [semester, setSemester] = React.useState("")
    const [tt_softcopy, setTimeTablePdf] = React.useState("")
    const router = useRouter();
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    


    // const handleUpload = async () => {
    //     setUploading(true);
    //     if (!selectedFile) return;
    //     const formData = new FormData();
    //     formData.append("myFile", selectedFile);
    //     const { data } = await axios.post("/api/staff/crud/c/uploadTimeTablePdf", formData);
    //     console.log(data);
    //     setUploading(false);
    // };

    const onSubmit = async (e) => {
        // e.preventDefault()

        if (selectedFile == null) return
        
        const data = new FormData()
        data.set('file', selectedFile)

        // const res = await fetch('/api/staff/crud/c/uploadTimeTablePdf', {
        //     method: 'POST',
        //     body: data
        // })

        const response = await axios.post('/api/staff/crud/c/uploadTimeTablePdf', data);

        setSelectedFile(null)
        setTimeTablePdf('/docs/staff/tt/' + response.data.result)
        //setTimeTablePdf(res.data.result)
    }



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
                    seqnum:  Number(seqnum),
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
                                <div className="flex flex-cols gap-2">
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={(e) => setSelectedFile(e.target.files?.[0])}
                                        required
                                    />

                                    <input type="button" value="Upload" disabled={selectedFile == null} onClick={onSubmit} />


                                    {/* <form onSubmit={onSubmit}>
                                        <input
                                            type="file"
                                            name="file"
                                            onChange={(e) => setSelectedFile(e.target.files?.[0])}
                                            required
                                        />
                                        <input className="font-sans text-zinc-600 " type="submit" value="Upload" disabled={!selectedFile}/>
                                    </form> */}

                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={saveChanges}>
                                    Save Changes
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
