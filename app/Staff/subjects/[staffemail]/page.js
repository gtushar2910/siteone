"use client";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import SideNavbar from "../../../../components/NavBar/SideNavBar";
import { usePathname } from "next/navigation";
import UnAuthorizedPage from "./UnAuthorizedPage";
import AuthorizedPage from "./AuthorizedPage";
import { Tooltip, useDisclosure } from "@nextui-org/react";
import { EditIcon } from "./icons/EditIcon";
import { TrashIcon, BookOpenIcon, LinkIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import AddEdit from "./AddEdit";
import Link from "next/link";
import { useSession } from "next-auth/react";

const StaffTeachings = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const pathname = usePathname();
  const [pathEmail, setPathEmail] = useState("");
  const [staff, setStaff] = useState([]);
  const [teachings, setTeachings] = useState([]);
  const [teaching, setTeaching] = useState();
  const [selectedId, setSelectedId] = useState("");

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const getStaffTeachings = async () => {
    let email = pathname.slice(pathname.lastIndexOf("/") + 1);
    setPathEmail(email);

    const response = await axios.get("/api/staff/crud/r/getTeachings?email=" + email);
    if (response) {
      const data = response.data;
      setStaff(data[0].staff);
      setTeachings(data[1].teachings);
    }
  };

  const AddEditClose = async () => {
    getStaffTeachings();
    onClose();
  };

  const columns = [
    { name: "ACADEMIC YEAR", uid: "academic_year" },
    { name: "SEMESTER", uid: "semester" },
    { name: "CLASS NAME", uid: "classname" },
    { name: "SUBJECT", uid: "subject_name" },
    { name: "SUBJECT CODE", uid: "subject_code" },
    { name: "COURSE DATA", uid: "actions" },
    { name: "EDIT", uid: "edit" },
  ];

  const addRow = async () => {
    setSelectedId("New");
    onOpen();
  };

  const deleteRow = async (id) => {
    if (confirm("Confirm Delete?")) {
      await axios.put("/api/staff/crud/d/deleteTeaching?id=" + id);
      getStaffTeachings();
    }
  };

  const editRow = async (listItem) => {
    setSelectedId("Edit");
    setTeaching(listItem);
    onOpen();
  };

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  }

  const renderCell = useCallback((listItem, columnKey) => {
    switch (columnKey) {
      case "actions":
        return (
          <div className="flex items-center gap-3">

            {isValidUrl(listItem.syllabus_url) && (
              <Tooltip content="Syllabus">
                <Link href={listItem.syllabus_url} target="_blank">
                  <DocumentTextIcon className="h-6 w-6 text-[var(--accent-primary)] hover:scale-110 transition-all" />
                </Link>
              </Tooltip>
            )}

            {isValidUrl(listItem.course_url) && (
              <Tooltip content="Course URL">
                <Link href={listItem.course_url} target="_blank">
                  <LinkIcon className="h-6 w-6 text-[var(--accent-secondary)] hover:scale-110 transition-all" />
                </Link>
              </Tooltip>
            )}

            {isValidUrl(listItem.materials_url) && (
              <Tooltip content="Materials">
                <Link href={listItem.materials_url} target="_blank">
                  <BookOpenIcon className="h-6 w-6 text-[var(--foreground-color)] hover:scale-110 transition-all" />
                </Link>
              </Tooltip>
            )}

            {isValidUrl(listItem.midterm_url) && (
              <Tooltip content="Midterm">
                <Link href={listItem.midterm_url} target="_blank">
                  <BookOpenIcon className="h-6 w-6 text-red-600 hover:scale-110 transition-all" />
                </Link>
              </Tooltip>
            )}

            {isValidUrl(listItem.tutorial_url) && (
              <Tooltip content="Tutorial">
                <Link href={listItem.tutorial_url} target="_blank">
                  <BookOpenIcon className="h-6 w-6 text-gray-700 hover:scale-110 transition-all" />
                </Link>
              </Tooltip>
            )}
          </div>
        );

      case "edit":
        return (
          <div className="flex items-center gap-4">
            <Tooltip content="Edit">
              <span
                className="cursor-pointer hover:text-[var(--accent-primary)] transition-all"
                onClick={() => editRow(listItem)}
              >
                <EditIcon />
              </span>
            </Tooltip>

            <Tooltip content="Delete">
              <span
                onClick={() => deleteRow(listItem.id)}
                className="cursor-pointer text-red-600 hover:scale-110 transition-all"
              >
                <TrashIcon className="h-6 w-6" />
              </span>
            </Tooltip>
          </div>
        );

      default:
        return (
          <p className="font-medium text-[var(--foreground-color)]">
            {listItem[columnKey]}
          </p>
        );
    }
  }, []);

  useEffect(() => {
    getStaffTeachings();
  }, []);

  return (
    <div className="flex gap-6 px-4 py-6 cardAboutDept">

      <SideNavbar staff={staff} />

      {user?.email === pathEmail ? (
        <AuthorizedPage
          addRow={addRow}
          columns={columns}
          user={user}
          teachings={teachings}
          renderCell={renderCell}
        />
      ) : (
        <UnAuthorizedPage
          columns={columns.filter((col) => col.name !== "EDIT")}
          teachings={teachings}
          renderCell={renderCell}
        />
      )}

      <AddEdit
        id={selectedId}
        onClose={AddEditClose}
        teaching={teaching}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        staff_email={pathEmail}
      />
    </div>
  );
};

export default StaffTeachings;
