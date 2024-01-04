"use client"

import React from "react";
import { Divider } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

export default function AboutDept() {
  return (
    <div className="px-4 py-4 cardAboutDept font-sans">
      <div className="box-border p-4 border-2 px-4 	bg-origin-border p-4 border-4 border-dashed">
        <p className="text-xl font-bold text-rose-950 decoration-solid uppercase"> About Department of Information Technology </p>
        <Divider className="my-4" />
        <Spacer x={4} />
        <p className="text-base font-medium">The Department of Information Technology Engineering, established in 2001 provides one of the best learning opportunities to students with its contemporary course design and curriculum and by providing state-of-art learning resources.</p>
        <Spacer y={4} />
        <p className="text-base font-medium">The IT department currently offers two AICTE approved courses of engineering:</p>
        <Spacer y={2} />
        <ol className="list-decimal px-6">
          <li className="text-base font-bold text-indigo-900"> BTech(Information Technology) with an intake of 120 students</li>
          <Spacer y={2} />
          <li className="text-base font-bold text-indigo-900"> BTech(Artificial Intelligence and Data Science) with an intake of 60 students</li>
        </ol>
        <Spacer y={4} />
        <p className="text-base font-medium">The Department of Information Technology has dedicated, fully-qualified and highly experienced teaching faculty who are committed towards nurturing young IT professionals of the next generation. The department has spacious, well-equipped laboratories with latest computer systems and other resources like laptops, projectors, graphics processing unit and wireless devices in addition to a continuous, high-speed Internet access to facilitate the curriculum’s practical implementation and project-development work.</p>
        <Spacer y={4} />
        <p className="text-base font-medium">The I.T. Department regularly organizes seminars, guest lectures, workshops, short term trainings and programming contests for students to expand their knowledge and skill set beyond the regular curriculum. We encourage our students to work on innovative and industry-applicable projects so that they can become the most highly sought after I.T. graduates in the country.</p>
        <Spacer y={2} />
        <Divider className="my-4" />
        <Spacer y={2} />
        <p className="text-lg font-bold text-rose-950 decoration-solid uppercase">Highlights of the Department</p>
        <Spacer y={3} />
        <ol className="list-disc px-6">
          <li className="text-base font-medium">Vibrant Learning and Research Environment</li>
          <li className="text-base font-medium">Jobs for students in reputed MNCs through Campus placement assistance like TCS, Wipro, Cognizant etc.</li>
          <li className="text-base font-medium">Scholarships for Meritorious students</li>
          <li className="text-base font-medium">Experienced and Qualified permanent faculty members holding Ph.D. and M.Tech degrees</li>
          <li className="text-base font-medium">Selection as Student ambassadors in International companies like TCS-India and SAP-Germany</li>
          <li className="text-base font-medium">IT students have been granted projects under SSIP (Student Startup and Innovation Policy) by Government of Gujarat</li>
          <li className="text-base font-medium">Consistently good academic records of students with gold medals as branch toppers at GTU</li>
        </ol>
      </div>
    </div>
  );
}
