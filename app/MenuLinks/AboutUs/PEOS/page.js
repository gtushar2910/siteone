"use client"

import React from "react";
import { Divider } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

export default function AboutDept() {
  return (
    <div className="px-4 py-4 cardAboutDept">
      <div className="box-border p-4 border-2 px-4 ">
        <p className="text-lg font-bold"> Programme Educational Objectives</p>
        <Divider className="my-4" />
        <Spacer x={4} />
        <p className="text-base font-medium">The educational objectives of the Information Technology program are designed to produce competent engineers who are ready to contribute effectively to the advancement of Information Technology causes and to accommodate the needs of the profession.</p>
        <Spacer y={4} />
        <p className="text-base font-semibold">The highlights of the objectives include:</p>
        <Spacer y={2} />
        
        <ol className="list-decimal px-6">
          <li className="text-base font-normal">Endorse the practice of Information Technology in the general disciplines of design, development and deployment of software and integration of existing technologies.</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Teach the application of fundamental engineering skills and specialized computing knowledge to provide feasible solutions to problems in various areas of IT.</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Provide knowledge to students beyond the prescribed curriculum.</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Regular organization of technical guest-lectures, programming contests, various quiz, seminars, short-term training programme, conference, workshops and cultural programme for an all-round development of students.</li>
        </ol>
      </div>
    </div>
  );
}
