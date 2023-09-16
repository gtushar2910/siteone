import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


export default function AddEdit({ id, isOpen, onOpen, onClose, onOpenChange, timetable, staff_email }) {
    const [disableSaveChanges, setDisableSaveChanges] = React.useState(false)
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
        alert('Hi')
        setDisableSaveChanges(true)
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
        alert("File Uploaded !!!")
        setDisableSaveChanges(false)
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
                                <div className="flex flex-cols gap-2">
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={(e) => setSelectedFile(e.target.files?.[0])}
                                        required
                                    />

                                    {/* <input type="button" value="Upload" disabled={selectedFile == null} onClick={onSubmit} /> */}
                                    <button
                                        class="px-6 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 skew-y-6 bg-purple-600 border-b-4 border-purple-800 rounded shadow-lg shadow-purple-600/50 hover:transform-none hover:border-purple-600" onClick={onSubmit}>Upload</button>

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
                                {/* <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button> */}
                                <button
                                        class="px-6 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 skew-y-6 bg-blue-600 border-b-4 border-blue-800 rounded shadow-lg shadow-blue-600/50 hover:transform-none hover:border-blue-600" disabled={disableSaveChanges} onClick={saveChanges}>Save Changes</button>
                                 <button
                                        class="px-4 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 skew-y-6 bg-red-600 border-b-4 border-red-800 rounded shadow-lg shadow-red-600/50 hover:transform-none hover:border-red-600" onClick={onClose}>Close</button>
                                {/* <button type="button" class="px-8 py-3 text-white bg-blue-600 rounded focus:outline-none disabled:opacity-100"
                                    onClick={saveChanges} disabled={disableSaveChanges}>Save Changes</button> */}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
