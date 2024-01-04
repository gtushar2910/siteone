import { NextResponse } from 'next/server'
import prisma from "../../../../../../lib/prisma"

export async function POST(request) {
  const data = await request.json()
  const type = data.type
  const level = data.level
  const description= data.description
  const seqnum = data.seqNum
  const staff_email = data.staff_email
//   console.log(id)
//   console.log(description)
//   console.log(level)
//   console.log(type)
//   console.log(seqnum)
  const post = await prisma.staff_Publications.create({
    data: {
        type: type,
        level: level,
        description: description,
        seqnum: seqnum,
        staff_email: staff_email
    },
  })
   return NextResponse.json(post)
}