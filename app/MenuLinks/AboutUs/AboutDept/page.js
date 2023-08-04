"use client"

import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function AboutDept() {
  return (
    <Card className="py-4 cardAboutDept">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold">About Department</p>

      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <p className="items-center">
        The department of Information Technology Engineering, established in 2001 provides one of the best 
        learning opportunities to students with its contemporary course design and curriculum encompassing 
        not only Information Technology but also covering key of Communication Technology and 
        by providing state-of-art learning resources. The department currently offers an 
        AICTE approved Bachelor’s Degree in Information Technology and is affiliated to the Gujarat 
        Technological University. The faculty comprising of 11 permanent, qualified teaching faculty 
        supported by lab assistants who are committed towards nurturing young IT professionals of next 
        generation.
        </p>'
        <br></br>
        <p>
        Academic results of Information Technology Department, SCET regularly top among GTU affiliated Engineering colleges of the South Gujarat Zone. The I.T. Department regularly organizes seminars, guest lectures, workshops, short term training and programming contests for students to expand their knowledge and skill set beyond the regular curriculum. We encourage our students to work on innovative and industry-applicable projects so that they can become the most highly sought after I.T. graduates in the country.
        </p>
        <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Learn more
          </a>
        </div>
      </div>
    </section>
      </CardBody>
    </Card>
   
  );
}
