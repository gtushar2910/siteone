"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
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
                To evolve as a global center of excellence in the field of Information Technology imparting technical education and professional ethics to thrive in an era of globalization.
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
      <Card className="py-4 cardAboutDept">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Vision</h1>

            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center">
            <p className="text-lg font-medium text-[#243c5a] italic "> 
            &quot; To evolve as a global center of excellence in the field of Information Technology imparting technical education and professional ethics to thrive in an era of globalization.&quot;
                </p>
            </CardBody>
        </Card>
    </>
  );
}
