"use client";

import React from "react";
import { Divider, Spacer } from "@nextui-org/react";

export default function AboutDept() {
  return (
    <div className="px-4 py-6 cardAboutDept font-sans">
      {/* Crimson Premium Card */}
      <div
        className="
          p-6 rounded-2xl
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          shadow-md hover:shadow-xl
          transition-all duration-300
        "
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold text-[var(--accent-primary)] uppercase tracking-wide">
          About Department of Information Technology
        </h1>

        <Divider className="my-4 bg-[var(--accent-secondary)] opacity-50" />
        <Spacer y={2} />

        {/* Content */}
        <p className="text-base font-medium text-[var(--foreground-color)] leading-relaxed">
          The Department of Information Technology Engineering, established in
          2001 provides one of the best learning opportunities to students with
          its contemporary course design and curriculum and by providing
          state-of-art learning resources.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium text-[var(--foreground-color)]">
          The IT department currently offers two AICTE approved courses:
        </p>

        <Spacer y={2} />

        <ol className="list-decimal px-6 space-y-2">
          <li className="text-base font-semibold text-[var(--accent-primary)]">
            BTech (Information Technology) — Intake: 120 students
          </li>
          <li className="text-base font-semibold text-[var(--accent-primary)]">
            BTech (Artificial Intelligence and Data Science) — Intake: 60
            students
          </li>
        </ol>

        <Spacer y={4} />

        <p className="text-base font-medium text-[var(--foreground-color)] leading-relaxed">
          The department has fully-qualified, highly experienced teaching
          faculty dedicated to nurturing the next generation of IT
          professionals. Our laboratories are equipped with modern computers,
          GPUs, laptops, wireless devices, projectors, and high-speed Internet
          access to support hands-on learning and innovative project
          development.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium text-[var(--foreground-color)] leading-relaxed">
          We regularly organize seminars, workshops, training sessions, guest
          lectures, and programming contests to expand students’ knowledge and
          skillset beyond the curriculum. Students are encouraged to work on
          innovative and industry-relevant projects to become highly sought-after
          IT graduates.
        </p>

        <Spacer y={4} />
        <Divider className="my-4 bg-[var(--accent-secondary)] opacity-50" />

        {/* Highlights */}
        <h2 className="text-xl font-bold text-[var(--accent-primary)] uppercase tracking-wide">
          Highlights of the Department
        </h2>

        <Spacer y={3} />

        <ul className="list-disc px-6 space-y-2">
          <li className="text-base font-medium text-[var(--foreground-color)]">
            Vibrant Learning and Research Environment
          </li>
          <li className="text-base font-medium text-[var(--foreground-color)]">
            Placements in top MNCs like TCS, Wipro, Cognizant, etc.
          </li>
          <li className="text-base font-medium text-[var(--foreground-color)]">
            Scholarships for meritorious students
          </li>
          <li className="text-base font-medium text-[var(--foreground-color)]">
            Highly experienced faculty with Ph.D. and M.Tech qualifications
          </li>
          <li className="text-base font-medium text-[var(--foreground-color)]">
            International student ambassador roles (TCS India, SAP Germany)
          </li>
          <li className="text-base font-medium text-[var(--foreground-color)]">
            Students awarded SSIP funding for innovative projects
          </li>
          <li className="text-base font-medium text-[var(--foreground-color)]">
            Consistent academic excellence with GTU gold medalists
          </li>
        </ul>
      </div>
    </div>
  );
}
