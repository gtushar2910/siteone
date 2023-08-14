"use client"

import React from "react";
import { Divider } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

export default function AboutDept() {
  return (
    <div className="px-4 py-4 cardAboutDept">
      <div className="box-border p-4 border-2 px-4 ">
        <p className="text-lg font-bold"> Programme Outcomes</p>
        <Divider className="my-4" />
        <Spacer x={4} />
        <p className="text-base font-semibold">Engineering Graduates will be able to:</p>
        <Spacer y={2} />
        
        <ol className="list-decimal px-6">
          <li className="text-base font-normal">Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using principles of mathematics, natural sciences, and engineering sciences.</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
          <Spacer y={2} />
          <li className="text-base font-normal">Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including design, modeling and visualization to engineering problems with an understanding of the limitations.</li>  
          <li className="text-base font-normal">Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>  
          <li className="text-base font-normal">Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>  
          <li className="text-base font-normal">Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>  
          <li className="text-base font-normal">Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>  
          <li className="text-base font-normal">Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>  
          <li className="text-base font-normal">Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects in multidisciplinary environments.</li>  
          <li className="text-base font-normal">Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>  
        </ol>
      </div>
    </div>
  );
}
