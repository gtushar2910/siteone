"use client"
import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const MessageFromHead = () => {
    return (

        <Card className="py-4 cardAboutDept">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Message From Head</h1>

            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center">
                <Image
                    width={150}
                    alt="NextUI hero Image"
                    src="\VJ.jpg"
                />
                <br></br>
                <p>asdfasdfasdf
                    asdfasdfasdfasdf
                    asdfadf
                </p>
            </CardBody>
        </Card>

    )
}

export default MessageFromHead
