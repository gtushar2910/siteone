"use client"
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";


import { AcademicCapIcon, BriefcaseIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";

const AcademicCalender = () => {
  return (
    <div className="grid grid-cols-1 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
      <div className="flex flex-col box-border items-center p-4 border-2 px-4" >
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" color="secondary"  size="lg" variant="shadow">
            <Tab
              key="uni"
              title={
                <div className="flex items-center space-x-2">
                  <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                  <span>University Academic Calender</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="music"
              title={
                <div className="flex items-center space-x-2">
                  <BuildingLibraryIcon className="h-6 w-6 text-blue-500" />
                  <span>College Academic Calender</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="videos"
              title={
                <div className="flex items-center space-x-2">
                  <BriefcaseIcon className="h-6 w-6 text-blue-500" />
                  <span>Department Academic Calender</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default AcademicCalender