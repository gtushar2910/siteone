import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function SideInfo() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const itemClasses = {
        base: "py-2 w-full bg-sky-100",
        title: "font-sans font-bold text-xl text-black-500",
        trigger: "px-2 py-4 data-[hover=true]:bg-blue-100 rounded-lg h-10 flex items-center",
        indicator: "text-large",
        content: "font-sans text-large px-2 ",
      };

  return (
    <Accordion variant="splitted" itemClasses={itemClasses} className="p-2 flex flex-col gap-3 w-full ">
      <AccordionItem key="1" aria-label="Accordion 1" title="B.Tech. I Year">
      <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>DIV</TableColumn>
              <TableColumn>CLASSROOM</TableColumn>
              <TableColumn>C.R.</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="0">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">DIV A (IT)</p></TableCell>
                <TableCell>K-203</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow key="1">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">DIV B (IT)</p></TableCell>
                <TableCell>G-203</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">DIV G (AIDS)</p></TableCell>
                <TableCell>G-202</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="B.Tech II Year">
      <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>DIV</TableColumn>
              <TableColumn>CLASSROOM</TableColumn>
              <TableColumn>C.R.</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="0">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">IT Div 1</p></TableCell>
                <TableCell>K-201</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow key="1">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">IT Div 2</p></TableCell>
                <TableCell>K-202</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">AIDS</p></TableCell>
                <TableCell>G-201</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="B.Tech III Year">
      <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>DIV</TableColumn>
              <TableColumn>CLASSROOM</TableColumn>
              <TableColumn>C.R.</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="0">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">IT</p></TableCell>
                <TableCell>E-203</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow key="1">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">AIDS</p></TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 3" title="B.Tech IV Year">
      <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>DIV</TableColumn>
              <TableColumn>CLASSROOM</TableColumn>
              <TableColumn>C.R.</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="0">
                <TableCell> <p className="font-bold	 text-left text-zinc-700">IT</p></TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
             
            </TableBody>
          </Table>
      </AccordionItem>
    </Accordion>
  );
}
