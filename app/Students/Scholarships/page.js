"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";

const Page = () => {
  return (
    <Card
      className="
        p-6 rounded-2xl cardAboutDept
        bg-[var(--card-bg)]
        border border-[var(--card-border)]
        shadow-md hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Header */}
      <CardHeader className="pb-2 flex flex-col">
        <h1 className="text-3xl font-bold text-[var(--accent-primary)] tracking-wide uppercase">
          Scholarships & Awards
        </h1>
        <Divider className="mt-4 bg-[var(--accent-secondary)] opacity-40" />
      </CardHeader>

      {/* Body */}
      <CardBody
        className="
          py-4 px-2
          text-[var(--foreground-color)]
        "
      >
        <ul className="list-disc space-y-4 pl-6 text-lg leading-relaxed">

          {/* Fees */}
          <li>
            <Link
              isExternal
              showAnchorIcon
              href="https://scet.ac.in/pages/fees-structure/"
              className="text-[var(--accent-primary)] font-semibold hover:opacity-80"
            >
              Fees Structure
            </Link>
          </li>

          {/* Scholarships */}
          <li>
            Scholarships are a vital source of motivation and support for
            students. They help build a strong academic foundation and encourage
            excellence through various forms such as general education support,
            foreign education grants, research fellowships, language
            scholarships, and talent recognition programs.
            <br />
            <br />
            Scholarships are broadly categorized into:
            <ol className="list-decimal list-inside mt-3 space-y-2">
              <li>
                <Link
                  isExternal
                  href="https://scet.ac.in/pages/offered-by-government/"
                  className="text-[var(--accent-primary)] hover:opacity-80"
                >
                  Government Scholarship
                </Link>
              </li>
              <li>
                <Link
                  isExternal
                  href="https://scet.ac.in/pages/assistance-from-community/"
                  className="text-[var(--accent-primary)] hover:opacity-80"
                >
                  Assistance from Community
                </Link>
              </li>
              <li>
                <Link
                  isExternal
                  href="https://scet.ac.in/pages/bank-loans/"
                  className="text-[var(--accent-primary)] hover:opacity-80"
                >
                  Bank Loans
                </Link>
              </li>
            </ol>
          </li>

          {/* Awards */}
          <li>
            <Link
              isExternal
              href="https://scet.ac.in/pages/awards-at-scet/"
              className="text-[var(--accent-primary)] font-semibold hover:opacity-80"
            >
              Awards at SCET
            </Link>
          </li>

        </ul>
      </CardBody>

      {/* Footer */}
      <Divider className="mt-4 bg-[var(--card-border)]" />
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Page;
