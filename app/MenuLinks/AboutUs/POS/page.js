"use client";

import React from "react";
import { Divider, Spacer } from "@nextui-org/react";

export default function ProgrammeOutcomes() {
  return (
    <div className="px-4 py-6 cardAboutDept">

      <div
        className="
          p-6 rounded-2xl 
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
      >
        {/* Header */}
        <h1 className="text-2xl font-bold text-[var(--accent-primary)] uppercase tracking-wide">
          Programme Outcomes (POs)
        </h1>

        <Divider className="my-4 bg-[var(--accent-secondary)] opacity-50" />
        <Spacer y={1} />

        {/* Subheading */}
        <p className="text-base font-semibold text-[var(--foreground-color)] leading-relaxed">
          Engineering Graduates will be able to:
        </p>

        <Spacer y={3} />

        {/* List of POs */}
        <ol className="list-decimal px-6 space-y-4 text-[var(--foreground-color)] leading-relaxed">

          <li className="text-base font-medium">
            Apply the knowledge of mathematics, science, engineering fundamentals, 
            and an engineering specialization to solve complex engineering problems.
          </li>

          <li className="text-base font-medium">
            Identify, formulate, review research literature, and analyze complex 
            engineering problems using principles of natural sciences and engineering sciences.
          </li>

          <li className="text-base font-medium">
            Design solutions for complex engineering problems and develop system 
            components or processes that meet specified needs with consideration for 
            public health and safety, and societal and environmental factors.
          </li>

          <li className="text-base font-medium">
            Use research-based knowledge and methods such as experiment design, 
            data analysis, and synthesis to arrive at valid conclusions.
          </li>

          <li className="text-base font-medium">
            Create, select, and apply appropriate techniques, modern IT tools, 
            design methods, modeling, and visualization tools to engineering activities 
            while understanding their limitations.
          </li>

          <li className="text-base font-medium">
            Apply informed reasoning to assess societal, health, safety, legal, 
            and cultural issues relevant to engineering practice.
          </li>

          <li className="text-base font-medium">
            Understand the impact of engineering solutions on society and the environment, 
            and demonstrate knowledge of sustainable development.
          </li>

          <li className="text-base font-medium">
            Apply ethical principles and commit to professional ethics, responsibilities, 
            and norms of engineering practice.
          </li>

          <li className="text-base font-medium">
            Function effectively as an individual and as a member or leader in diverse 
            and multidisciplinary teams.
          </li>

          <li className="text-base font-medium">
            Communicate effectively on complex engineering activities with the engineering 
            community and society at large — including writing clear reports, preparing 
            documentation, making effective presentations, and giving/receiving instructions.
          </li>

          <li className="text-base font-medium">
            Demonstrate knowledge of engineering and management principles and apply 
            them to manage projects in multidisciplinary environments.
          </li>

          <li className="text-base font-medium">
            Recognize the need for lifelong learning and possess the ability to 
            independently engage in continuous learning in the context of technological change.
          </li>

        </ol>
      </div>
    </div>
  );
}
