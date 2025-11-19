"use client";

import React from "react";
import Carousel1 from "../components/HomeSlider/page1";
import News from "../components/HomePage/News";
import SideInfo from "../components/HomePage/SideInfo";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 py-6 cardAboutDept space-y-8">

    {/* 🌟 HERO SECTION */}
{/* 🌟 HERO SECTION */}
<div
  className="
    rounded-2xl p-10 text-center
    bg-[var(--card-bg)]
    border border-[var(--card-border)]
    shadow-md hover:shadow-xl
    transition-all duration-300
  "
>
  <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--accent-primary)] tracking-wide">
    Welcome to the IT & AI-DS Department Portal
  </h1>

  <Divider className="mt-6 mb-4 bg-[var(--accent-secondary)] opacity-40" />

  <p className="text-lg text-[var(--foreground-color)] max-w-3xl mx-auto">
    Access academics, resources, events, faculty information, achievements, and 
    student services for both Information Technology and Artificial Intelligence 
    & Data Science programs — all in one unified portal.
  </p>
</div>



      {/* 🌟 QUICK LINKS GRID */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Syllabus", href: "/Syllabus" },
          { title: "Time Table", href: "/TimeTable" },
          { title: "Faculty", href: "/Staff" },
          { title: "Events", href: "/MenuLinks/Events" },
          { title: "Activities", href: "/MenuLinks/Activities" },
          { title: "Placements", href: "/Placements" },
          { title: "Alumni", href: "/Alumni" },
          { title: "Achievements", href: "/Achievements" },
        ].map((item) => (
          <Link key={item.title} href={item.href}>
            <Card
              isPressable
              className="
                p-6 text-center border border-[var(--card-border)]
                bg-[var(--card-bg)]
                shadow-sm hover:shadow-xl 
                hover:scale-[1.02] transition-all
                rounded-2xl
              "
            >
              <CardHeader className="text-xl font-bold text-[var(--accent-primary)] mx-auto">
                {item.title}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div> */}

      {/* 🌟 MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT: NEWS & UPDATES */}
        <Card className="border border-[var(--card-border)] bg-[var(--card-bg)] shadow-lg">
          <CardHeader className="text-2xl font-bold text-[var(--accent-primary)] p-4">
            Latest News & Updates
          </CardHeader>
          <Divider />
          <CardBody className="p-4">
            {/* <News /> */}
            Coming Soon...
          </CardBody>
        </Card>

        {/* RIGHT: CAROUSEL */}
        <Card className="md:col-span-2 border border-[var(--card-border)] bg-[var(--card-bg)] shadow-lg">
          <CardBody className="p-0 rounded-2xl overflow-hidden">
            <Carousel1 />
          </CardBody>
        </Card>

      </div>

    </div>
  );
}
