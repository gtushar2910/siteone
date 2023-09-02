import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Textarea } from "@nextui-org/react";
import axios from "axios";

export default function AddEdit({ id, isOpen, onOpen, onClose, onOpenChange, profile, staff_email }) {

    const [selectedKeysType, setSelectedKeysType] = React.useState(new Set(["WORKSHOP_SEMINAR_STTP"]));
    const [seqNum, setSeqNum] = React.useState(0)
    const [description, setDescription] = React.useState("")

    useEffect(() => {
        if (id == "New") {
            setSelectedKeysType("WORKSHOP_SEMINAR_STTP");
            setSeqNum(0);
            setDescription("");
            return;
        }
        if (profile) {
            setSelectedKeysType(profile.type);
            setSeqNum(profile.seqnum);
            setDescription(profile.description);
        }
    }, [profile, id]);

    const saveChanges = async (
    ) => {
        if (description == "") {
            alert("Description Can not be null!");
        } else {
            let type = "WORKSHOP_SEMINAR_STTP";
           
            if (selectedKeysType.currentKey)
                type = selectedKeysType.currentKey

            if (id == "Edit") {
                const response = await axios.post('/api/staff/crud/u/updateProfile', {
                    type: type,
                    seqNum: seqNum,
                    description: description,
                    id: profile.id
                });
            } else if (id == "New") {
                const response = await axios.post('/api/staff/crud/c/createProfile', {
                    type: type,
                    seqNum: Number(seqNum),
                    description: description,
                    staff_email: staff_email
                });
            }
            onClose()
        }
    };


    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add/Edit profiles</ModalHeader>
                            <ModalBody>
                                <Input
                                    isDisabled
                                    type="text"
                                    label="id"
                                    defaultValue={id == "New" ? "New" : profile.id}
                                    className="max-w-xs"
                                />
                                <Spacer y={4} />
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="capitalize"
                                        >
                                            {selectedKeysType}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedKeysType}
                                        onSelectionChange={setSelectedKeysType}
                                    >
                                        <DropdownItem key="EXPERT_LECTURES_DELIVERED">EXPERT_LECTURES_DELIVERED</DropdownItem>
                                        <DropdownItem key="ACHIEVEMENTS_AWARDS">ACHIEVEMENTS_AWARDS</DropdownItem>
                                        <DropdownItem key="ADMINISTRATIVE_DUTIES">ADMINISTRATIVE_DUTIES</DropdownItem>
                                        <DropdownItem key="MEMBERSHIPS">MEMBERSHIPS</DropdownItem>
                                        <DropdownItem key="WORKSHOP_SEMINAR_STTP">WORKSHOP_SEMINAR_STTP</DropdownItem>
                                        <DropdownItem key="OTHER">OTHER</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Spacer y={4} />
                                <Input type="text" isRequired placeholder="Enter Sequence Number" value={seqNum} onValueChange={setSeqNum} />
                                <Spacer y={4} />
                                <Textarea type="text" isRequired placeholder="Enter Description" value={description} onValueChange={setDescription} />
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
