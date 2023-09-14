"use client"
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Modal isOpen={visible} >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Mission</ModalHeader>
          <ModalBody>
          <div className="box-border p-2 border-2">
          <ul className="list-disc px-6">
                    <li className="text-lg tracking-normal">
                    To impart sound technical knowledge in the field of Information Technology through a creative balance of academic, research and co-curricular activities.
                    </li>
                    <Spacer y={3}/>
                    <li className="text-lg tracking-normal">To cultivate professional ethics and soft skills in the student for global competitiveness.</li>
                    <Spacer y={3}/>
                    <li className="text-lg tracking-normal">To collaborate with industries, government entities and other academic institutions to bring socially responsible, sustainable IT solutions to the world.</li>
                </ul>
            </div>
                
                


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
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Mission</h1>

            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center">
            <div className="box-border p-2 border-2">
          <ul className="list-disc px-6">
                    <li className="text-lg tracking-normal">
                    To impart sound technical knowledge in the field of Information Technology through a creative balance of academic, research and co-curricular activities.
                    </li>
                    <Spacer y={3}/>
                    <li className="text-lg tracking-normal">To cultivate professional ethics and soft skills in the student for global competitiveness.</li>
                    <Spacer y={3}/>
                    <li className="text-lg tracking-normal">To collaborate with industries, government entities and other academic institutions to bring socially responsible, sustainable IT solutions to the world.</li>
                </ul>
            </div>
            </CardBody>
        </Card>
    </>
  );
}
