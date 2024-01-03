"use client"
import React from 'react'

import { Card, CardBody,CardFooter,CardHeader,Image,Divider,Link, Spacer } from "@nextui-org/react";

const page = () => {
    return (
        <Card className="py-4 cardAboutDept flex">
        <CardHeader className="pb-0 pt-2 px-4   ">
         
          <div className="flex flex-col">
            <p className="text-xl  text-rose-950">Scholarships and Awards</p>
            <Spacer y={2} />
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className='overflow-hidden py-2 items-center bg-orange-50			'>
          <ul className='list-disc ' >
            <li>
            <Link
            isExternal
            showAnchorIcon
            href="https://scet.ac.in/pages/fees-structure/"
           >
            Fees Structure
          </Link></li>
            <li>Scholarships: Scholarship is a very important motivational tool for the students and it helps them 
                in establishing strong educational background which is necessary for a great career. Through a 
                scholarship a student can receive motivation for studies for various ways from family, school, 
                institution, society as well as government. A scholarship has various facets, it can be in from of 
                general education, foreign education, research fellowship, language research fellowship, 
                talent search etc. A scholarship can be classified into three categories:
                <ol className='list-decimal list-inside'>
                    <li><Link isExternal  href='https://scet.ac.in/pages/offered-by-government/'>Government Scholarship</Link> </li>
                    <li><Link isExternal  href='https://scet.ac.in/pages/assistance-from-community/'>Assistance from Community</Link> </li>
                    <li><Link isExternal  href='https://scet.ac.in/pages/bank-loans/'>Bank Loans</Link> </li>
                </ol>
                
                </li>
            <li><Link isExternal href='https://scet.ac.in/pages/awards-at-scet/'>Awards</Link> </li>
            </ul>
        </CardBody>
        <Divider/>
        <CardFooter className='pb-0 pt-2 px-4  flex-col'>
         
        </CardFooter>
      </Card>
    )
}

export default page
