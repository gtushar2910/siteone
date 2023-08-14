"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Modal isOpen={visible} >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Vision</ModalHeader>
          <ModalBody>
                <p className="text-lg font-medium text-[#243c5a] italic "> 
                "To evolve as a global center of excellence in the field of Information Technology imparting technical education and professional ethics to thrive in an era of globalization."
                </p>
                </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={() => {
              setVisible(false);
            }}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>
  );
}
