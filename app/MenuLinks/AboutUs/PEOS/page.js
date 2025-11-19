"use client";

import React from "react";
import { Divider, Spacer } from "@nextui-org/react";

export default function PEOs() {
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
          Programme Educational Objectives (PEOs)
        </h1>

        <Divider className="my-4 bg-[var(--accent-secondary)] opacity-50" />
        <Spacer y={1} />

        {/* Intro paragraph */}
        <p className="text-base font-medium text-[var(--foreground-color)] leading-relaxed">
          The Programme Educational Objectives of the Information Technology program
          aim to prepare competent engineers who can contribute effectively to the 
          advancement of Information Technology and meet the evolving needs of the profession.
        </p>

        <Spacer y={4} />

        <p className="text-base font-semibold text-[var(--foreground-color)]">
          The major objectives include:
        </p>

        <Spacer y={3} />

        {/* Objective list */}
        <ol className="list-decimal px-6 space-y-3 text-[var(--foreground-color)] leading-relaxed">

          <li className="text-base font-medium">
            Endorse the practice of Information Technology in the areas of design, 
            development, deployment of software systems, and integration of modern technologies.
          </li>

          <li className="text-base font-medium">
            Teach the application of fundamental engineering concepts and specialized computing
            knowledge to develop feasible solutions for real-world IT problems.
          </li>

          <li className="text-base font-medium">
            Provide students with opportunities to gain knowledge beyond the prescribed curriculum.
          </li>

          <li className="text-base font-medium">
            Regularly organize technical guest lectures, programming contests, quizzes, seminars, 
            short-term training programs, conferences, workshops, and cultural activities to ensure 
            the holistic development of students.
          </li>

        </ol>
      </div>
    </div>
  );
}
