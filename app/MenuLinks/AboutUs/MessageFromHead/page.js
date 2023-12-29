"use client"
import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
const MessageFromHead = () => {
    return (

        <Card className="py-4 cardAboutDept ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Message From Head</h1>

            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center">
                <Image
                    width={150}
                    alt="NextUI hero Image"
                    src="\VJ.jpg"
                />
                <br></br>
                <div className="box-border p-4  px-4 	bg-origin-border p-4 border-4 w-1/2">
                    <p className="text-l font-bold text-rose-950 decoration-solid uppercase"> Dear Students </p>
                    <Divider className="my-4" />
                    <Spacer x={4} />
                    <p className="text-base font-medium">I trust this message finds you in good health and spirits. As we navigate through the dynamic landscape of technology, I would like to share some insights and updates from the Information Technology Department.</p>
                    <Spacer y={4} />
                    <p className="text-base font-medium">Our department's strength lies in collaboration, and I am pleased to see the dedication and teamwork displayed by each one of you. The synergy within our team is fundamental to our success, and I encourage you to continue fostering a culture of collaboration and open communication.</p>
                    <Spacer y={4} />
                    <p className="text-base font-medium">The IT industry is ever-evolving, and staying ahead of technological advancements is crucial. Let's remain proactive in staying informed about emerging technologies and trends that could benefit our projects and the organization as a whole.</p>
                    <Spacer y={4} />
                    <p className="text-base font-medium">Learning is a lifelong journey, and I encourage each team member to invest in their professional development. Whether through training programs, certifications, or knowledge-sharing sessions within the team, let's embrace opportunities for continuous learning.</p>
                    <Spacer y={4} />
                    <p className="text-base font-medium">I am confident that together, we will continue to achieve great things. The Information Technology Department is not just a team; it's a community of talented individuals working towards a shared vision. Let's keep pushing boundaries and creating a positive impact.</p>
                    <Spacer y={4} />
                    <p className="text-base font-medium">Best Regards,</p>
                    <Spacer y={2} />
                    <p className="text-base font-medium">Dr. Vivaksha Jariwala</p>
                    <Spacer y={2} />
                    <p className="text-base font-medium">Head of Information Technology Department</p>
                    


                    
                </div>
                
            </CardBody>
        </Card>

    )
}

export default MessageFromHead
