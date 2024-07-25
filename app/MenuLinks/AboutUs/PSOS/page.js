"use client"

import React from "react";
import { Divider } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

export default function AboutDept() {
  return (
    <div className="px-4 py-4 cardAboutDept">
      <div className="box-border p-4 border-2 px-4 ">
        <p className="text-lg font-bold"> Programme Specific Outcomes</p>
        <Divider className="my-4" />
        <Spacer x={4} />
        <p className="text-base font-semibold">The graduate from the department will be able to:</p>
        <Spacer y={2} />
        
        <ol className="list-decimal px-6">
          <li className="text-base font-normal">Develop and deploy efficient algorithms to solve engineering problems .</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Design, code, validate and test various application and system software and evaluate the performance based on performance metrics for software systems .</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Perform information retrieval and processing for real-time applications.</li>
        </ol>
      </div>
    </div>
  );
}
