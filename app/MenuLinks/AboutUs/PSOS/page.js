"use client";

import React from "react";
import { Divider, Spacer } from "@nextui-org/react";

export default function ProgrammeSpecificOutcomes() {
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
          Programme Specific Outcomes (PSOs)
        </h1>

        <Divider className="my-4 bg-[var(--accent-secondary)] opacity-50" />
        <Spacer y={1} />

        {/* Subheading */}
        <p className="text-base font-semibold text-[var(--foreground-color)] leading-relaxed">
          The graduates from the department will be able to:
        </p>

        <Spacer y={3} />

        {/* PSO List */}
        <ol className="list-decimal px-6 space-y-4 text-[var(--foreground-color)] leading-relaxed">

          <li className="text-base font-medium">
            Develop and deploy efficient algorithms to solve engineering problems.
          </li>

          <li className="text-base font-medium">
            Design, code, validate and test various application and system software, 
            and evaluate their performance using appropriate metrics.
          </li>

          <li className="text-base font-medium">
            Perform information retrieval and processing for real-time applications.
          </li>

        </ol>
      </div>
    </div>
  );
}
