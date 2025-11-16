"use client";
import React from "react";
import { Card, CardHeader, CardBody, Divider, Spacer } from "@nextui-org/react";

export default function Vision() {
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
          Vision
        </h1>
        <Divider className="my-4 bg-[var(--accent-secondary)] opacity-50 w-full" />
      </CardHeader>

      {/* Body */}
      <CardBody className="overflow-visible py-2 items-center">
        <p className="
          text-lg font-medium italic 
          text-[var(--foreground-color)]
          leading-relaxed text-center
        ">
          “To evolve as a global center of excellence in the field of Information Technology, 
          imparting technical education and professional ethics to thrive in an era of globalization.”
        </p>
      </CardBody>
    </Card>
  );
}
