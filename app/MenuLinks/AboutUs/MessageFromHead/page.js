"use client";
import React from "react";
import { Card, CardBody, CardHeader, Divider, Spacer, Image } from "@nextui-org/react";

const MessageFromHead = () => {
  return (
    <Card
      className="
        cardAboutDept 
        p-6 rounded-2xl
        bg-[var(--card-bg)]
        border border-[var(--card-border)]
        shadow-md hover:shadow-xl 
        transition-all duration-300
      "
    >
      {/* Heading */}
      <CardHeader className="pb-2 pt-0 px-4 flex-col items-center">
        <h1 className="text-2xl font-bold text-[var(--accent-primary)] uppercase tracking-wide text-center">
          Message from the Head of Department
        </h1>
        <Divider className="my-4 bg-[var(--accent-secondary)] opacity-50 w-full" />
      </CardHeader>

      <CardBody className="overflow-hidden py-2 px-4 text-[var(--foreground-color)] leading-relaxed">

        <p className="text-lg font-semibold text-[var(--accent-primary)]">
          Dear Students, Faculty, and Stakeholders,
        </p>

        <Spacer y={3} />

        <p className="text-base font-medium">
          It is with great pleasure and enthusiasm that I welcome you to the
          Department of Information Technology at Sarvajanik College of
          Engineering and Technology, Sarvajanik University. As the Head of the
          Department, I am honored to lead a dynamic team of faculty members and
          guide a cohort of bright and aspiring students.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium">
          In today's fast-paced world, information technology stands at the
          forefront of innovation, transforming industries and redefining the way
          we live and work. Our department is committed to empowering students
          with the technical knowledge, practical exposure, and problem-solving
          mindset needed to excel in this evolving landscape.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium">
          Our esteemed faculty members blend academic expertise with real-world
          experience, ensuring that students receive a strong foundation rooted in
          both theory and practice. Their dedication to research and innovation
          further enriches the learning environment.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium">
          The department is equipped with modern laboratories, computing
          infrastructure, GPUs, high-speed internet access, and collaborative
          spaces that nurture creativity, experimentation, and project-based
          learning.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium">
          I encourage students and faculty alike to participate actively in
          research, workshops, hackathons, and extracurricular engagements. The
          department is more than an academic unit—it's a thriving community of
          creators, innovators, and leaders.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium">
          I look forward to witnessing your achievements and contributions to the
          field of Information Technology. Together, let us strive for excellence
          and shape a brighter, technology-driven future.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium">
          Feel free to explore our website for more details about programs,
          faculty, research, and upcoming events. Your suggestions and questions
          are always welcome.
        </p>

        <Spacer y={4} />

        <p className="text-base font-medium">Wishing you a successful academic year!</p>

        <Spacer y={6} />

        <div className="flex flex-col items-center">
          <Image
            width={150}
            alt="HOD Photo"
            src="/VJ.jpg"
            className="rounded-full shadow-md border-2 border-[var(--card-border)]"
          />
        </div>

        <Spacer y={3} />

        <p className="text-base font-medium text-center">Best Regards,</p>
        <p className="text-lg font-bold text-center mt-1">Dr. Vivaksha Jariwala</p>
        <p className="text-base font-semibold text-center">
          Professor & Head of the Department
        </p>
        <p className="text-base font-semibold text-center">
          Department of Information Technology
        </p>
        <p className="text-base font-semibold text-center">
          Sarvajanik College of Engineering and Technology
        </p>
        <p className="text-base font-semibold text-center">
          Sarvajanik University
        </p>
      </CardBody>
    </Card>
  );
};

export default MessageFromHead;
