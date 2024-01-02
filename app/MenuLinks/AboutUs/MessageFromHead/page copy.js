"use client"
import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
const MessageFromHead = () => {
    return (

        <Card className="py-4 cardAboutDept ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h1 className="mb-4 text-1xl font-extrabold tracking-tight leading-none text-gray-900 md:text-1xl lg:text-2xl dark:text-white">Message from the Head of the Department</h1>

            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center">
                <Image
                    width={150}
                    alt="NextUI hero Image"
                    src="\VJ.jpg"
                />
                <br></br>
                <div className=" w-1/2">
                    <p className="text-l font-bold text-rose-950 decoration-solid ">Dear Students, Faculty, and Stakeholders, </p>
                    <Divider className="my-4" />
                    <Spacer x={4} />
                    <p className="text-base font-small flex justify-normal ">It is with great pleasure and enthusiasm that I welcome you to the Department of
Information Technology at Sarvajanik College of Engineering and Technology,
Sarvajanik University. As the Head of the Department, I am honored to lead a
dynamic team of faculty members and guide a cohort of bright and aspiring students.</p>
                    <Spacer y={4} />
                    <p className="text-base font-small flex justify-normal">In today&#39;s fast-paced world, information technology is at the forefront of innovation,
driving change across industries and transforming the way we live and work. Our
department is committed to providing a comprehensive education that equips our
students with the knowledge and skills necessary to thrive in this evolving landscape.</p>
                    <Spacer y={4} />
                    <p className="text-base font-small flex justify-normal">We take pride in our faculty members, who are not only experienced educators but
also active contributors to research and development in the field. Their dedication to
academic excellence ensures that our students receive a well-rounded education
that combines theoretical knowledge with practical applications.</p>
                    <Spacer y={4} />
                    <p className="text-base font-small flex justify-normal">Our state-of-the-art labs and facilities provide an ideal environment for hands-on
learning, encouraging students to explore, experiment, and innovate. We believe in
fostering a culture of curiosity, critical thinking, and collaboration, laying the
foundation for our students to become leaders and problem-solvers in the IT
industry.</p>
<Spacer y={4} />
                    <p className="text-base font-small flex justify-normal">As we embark on this academic journey, I encourage both students and faculty to
actively engage in research, projects, and extracurricular activities. The department
is not just a place of learning; it is a community where ideas are nurtured, and talents
are honed.</p>
                    <Spacer y={4} />
                    <p className="text-base font-small flex justify-normal">I look forward to witnessing the achievements and successes of our students and
faculty in the coming years. Together, let us contribute to the advancements in
information technology and make a positive impact on society.</p>
<Spacer y={4} />
                    <p className="text-base font-small flex justify-normal">Feel free to explore our website for more information about the department&#39;s
programs, faculty, and upcoming events. If you have any questions or suggestions,
please don&#39;t hesitate to reach out.</p>
<Spacer y={4} />
                    <p className="text-base font-small flex justify-normal">Wishing you a rewarding and fulfilling academic year!</p>
                    <Spacer y={4} />
                    <p className="text-base font-medium">Best Regards,</p>
                    <Spacer y={1} />
                    <p className="text-base font-medium">Dr. Vivaksha Jariwala</p>
                    <Spacer y={1} />
                    <p className="text-base font-medium">Associate Professor and Head of the Department,</p>
                    <Spacer y={1} />
                    <p className="text-base font-medium">Department of Information Technology,</p>
                    <Spacer y={1} />
                    <p className="text-base font-medium">Sarvajanik College of Engineering and Technology,</p>

                     <Spacer y={1} />
                    <p className="text-base font-medium">Sarvajanik University</p>


                    
                </div>
                
            </CardBody>
        </Card>

    )
}

export default MessageFromHead
