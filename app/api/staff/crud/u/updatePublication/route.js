import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma"

export async function POST(request) {
  const data = await request.json()
  const id = data.id //data.get("id")
  const type = data.type
  const level = data.level
  const description= data.description
  const seqnum = data.seqNum
//   console.log(id)
//   console.log(description)
//   console.log(level)
//   console.log(type)
//   console.log(seqnum)
  const post = await prisma.staff_Publications.update({
    where: { id: id},
    data: {
        type: type,
        level: level,
        description: description,
        seqnum: seqnum
    },
  })
   return NextResponse.json(post)
}