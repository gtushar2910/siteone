"use client";
import React from "react";
import { Card, CardHeader, CardBody, Divider, Spacer } from "@nextui-org/react";

export default function Mission() {
  return (
    <Card
      className="
        p-6 rounded-2xl 
        cardAboutDept
        bg-[var(--card-bg)]
        border border-[var(--card-border)]
        shadow-md hover:shadow-xl 
        transition-all duration-300
      "
    >
      {/* Header */}
      <CardHeader className="pb-2 pt-0 px-4 flex-col items-center">
        <h1 className="text-2xl font-bold text-[var(--accent-primary)] uppercase tracking-wide">
          Mission
        </h1>
        <Divider className="my-4 bg-[var(--accent-secondary)] opacity-50 w-full" />
      </CardHeader>

      {/* Body */}
      <CardBody className="overflow-visible py-2 px-4">

        <ul className="list-disc px-6 space-y-4 text-[var(--foreground-color)] leading-relaxed">

          <li className="text-lg font-medium">
            To impart sound technical knowledge in the field of Information Technology 
            through a creative balance of academic, research and co-curricular activities.
          </li>

          <li className="text-lg font-medium">
            To cultivate professional ethics and soft skills in the students for global competitiveness.
          </li>

          <li className="text-lg font-medium">
            To collaborate with industries, government entities, and other academic institutions 
            to bring socially responsible, sustainable IT solutions to the world.
          </li>

        </ul>

      </CardBody>
    </Card>
  );
}
