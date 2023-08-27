import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function AddEdit({ id, isOpen, onOpen, onOpenChange, publication }) {

    const [selectedKeysType, setSelectedKeysType] = React.useState(new Set(["JOURNAL"]));
    const [selectedKeysLevel, setSelectedKeysLevel] = React.useState(new Set(["NATIONAL"]));
    const [seqNum, setSeqNum] = React.useState(0)
    const [description, setDescription] = React.useState("")

    const selectedValueType = React.useMemo(
        () => Array.from(selectedKeysType).join(", ").replaceAll("_", " "),
        [selectedKeysType]
    );
    const selectedValueLevel = React.useMemo(
        () => Array.from(selectedKeysLevel).join(", ").replaceAll("_", " "),
        [selectedKeysLevel]
    );

    useEffect(() => {
        if (id == "New") {
            setSelectedKeysType("JOURNAL");
            setSelectedKeysLevel("NATIONAL");
            setSeqNum(0);
            setDescription("");
            return;
        }
        if (publication) {
            setSelectedKeysType(publication.type);
            setSelectedKeysLevel(publication.level);
            setSeqNum(publication.seqnum);
            setDescription(publication.description);
        }
    }, [publication, id]);

    const saveChanges = async (    
      ) => {
        // if (confirm("Confirm Delete?")) {
        //   const response = await axios.put("/api/staff/crud/d/deletePublication?id=" + id);
        // }
        console.log(selectedKeysLevel)
        console.log(selectedKeysType)
        console.log(seqNum)
        console.log(description)
        
      };

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add/Edit Publications</ModalHeader>
                            <ModalBody>

                                <Input
                                    isDisabled
                                    type="text"
                                    label="id"
                                    defaultValue={id == "New" ? "New" : publication.id}
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
                                        <DropdownItem key="JOURNAL">JOURNAL</DropdownItem>
                                        <DropdownItem key="BOOK">BOOK</DropdownItem>
                                        <DropdownItem key="CONFERENCE">CONFERENCE</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Spacer y={4} />
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="capitalize"
                                        >
                                            {selectedKeysLevel}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedKeysLevel}
                                        onSelectionChange={setSelectedKeysLevel}
                                    >
                                        <DropdownItem key="NATIONAL">NATIONAL</DropdownItem>
                                        <DropdownItem key="INTERNATIONAL">INTERNATIONAL</DropdownItem>
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
