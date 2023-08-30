import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/navigation';


export default function AddEdit({ id, isOpen, onOpen, onClose, onOpenChange, teaching, staff_email }) {

    const [academic_year, setAcademicYear] = React.useState("")
    const [semester, setSemester] = React.useState("")
    const [subject_name, setSubjectName] = React.useState("")
    const [subject_code, setSubjecCode] = React.useState("")
    const [syllabus_url, setSyllabusURL] = React.useState("")
    const [classname, setClassName] = React.useState("")
    const [course_url, setCourseURL] = React.useState("")
    const [midterm_url, setMidTermURL] = React.useState("")
    const [tutorial_url, setTutorialURL] = React.useState("")
    const [materials_url, setMaterialsURL] = React.useState("")
    const router = useRouter();



    useEffect(() => {
        if (id == "New") {
            setAcademicYear("")
            setSemester("")
            setSubjectName("")
            setSubjecCode("")
            setSyllabusURL("")
            setClassName("")
            setCourseURL("")
            setMidTermURL("")
            setTutorialURL("")
            setMaterialsURL("")
            return;
        }
        if (teaching) {
            setAcademicYear(teaching.academic_year)
            setSemester(teaching.semester)
            setSubjectName(teaching.subject_name)
            setSubjecCode(teaching.subject_code)
            setSyllabusURL(teaching.syllabus_url)
            setClassName(teaching.classname)
            setCourseURL(teaching.course_url)
            setMidTermURL(teaching.midterm_url)
            setTutorialURL(teaching.tutorial_url)
            setMaterialsURL(teaching.materials_url)
        }
    }, [teaching, id]);

    const saveChanges = async (
    ) => {
        if (academic_year == "" || semester == "" || subject_name == "" || subject_code == "" || syllabus_url == "" || course_url == "" || materials_url == "" || midterm_url == "" || tutorial_url == "") {
            alert("Please Enter All the Values!!!");
        } else {

            if (id == "Edit") {
                const response = await axios.post('/api/staff/crud/u/updateTeaching', {
                    academic_year: academic_year,
                    semester: semester,
                    subject_name: subject_name,
                    subject_code: subject_code,
                    classname: classname,
                    syllabus_url: syllabus_url,
                    course_url: course_url,
                    materials_url: materials_url,
                    midterm_url: midterm_url,
                    tutorial_url: tutorial_url,
                    id: teaching.id
                });
            } else if (id == "New") {
                const response = await axios.post('/api/staff/crud/c/createTeaching', {
                    academic_year: academic_year,
                    semester: semester,
                    subject_name: subject_name,
                    subject_code: subject_code,
                    classname: classname,
                    syllabus_url: syllabus_url,
                    course_url: course_url,
                    materials_url: materials_url,
                    midterm_url: midterm_url,
                    tutorial_url: tutorial_url,
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
                                <ModalHeader className="flex flex-col gap-1">Add/Edit Teachings</ModalHeader>
                                <ModalBody>
                                    <Input
                                        isDisabled
                                        type="text"
                                        label="id"
                                        defaultValue={id == "New" ? "New" : teaching.id}
                                        className="max-w-xs"
                                    />
                                    <Spacer y={1} />
                                    <div className="flex flex-cols gap-2">
                                    <Input type="text" isRequired placeholder="Enter Academic Year" value={academic_year} onValueChange={setAcademicYear} />
                                    <Input type="text" isRequired placeholder="Enter Semester" value={semester} onValueChange={setSemester} />
                                    </div>
                                    <div className="flex flex-cols gap-2">
                                    <Input type="text" isRequired placeholder="Enter Subject Name" value={subject_name} onValueChange={setSubjectName} />
                                    <Input type="text" isRequired placeholder="Enter Subject Code" value={subject_code} onValueChange={setSubjecCode} />
                                    </div>
                                    <Spacer y={1} />
                                    <div className="flex flex-cols gap-2">
                                    <Input type="text" isRequired placeholder="Enter Class Name" value={classname} onValueChange={setClassName} />
                                    <Input type="text" isRequired placeholder="Enter Syllabus URL" value={syllabus_url} onValueChange={setSyllabusURL} />
                                    </div>
                                    <Spacer y={1} />
                                    <div className="flex flex-cols gap-2">
                                    <Input type="text" isRequired placeholder="Enter Course URL" value={course_url} onValueChange={setCourseURL} />
                                    <Input type="text" isRequired placeholder="Enter Materials URL" value={materials_url} onValueChange={setMaterialsURL} />
                                    </div>
                                    <Spacer y={1} />
                                    <div className="flex flex-cols gap-2">
                                    <Input type="text" isRequired placeholder="Enter MidTerm URL" value={midterm_url} onValueChange={setMidTermURL} />
                                    <Input type="text" isRequired placeholder="Enter Tutorial URL" value={tutorial_url} onValueChange={setTutorialURL} />
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
