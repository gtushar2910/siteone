import { NextResponse } from 'next/server'
import prisma from "../../../../../../lib/prisma"

export async function POST(request) {
  const data = await request.json()
  const id = data.id 
  const type = data.type
  const description= data.description
  const seqnum = data.seqNum
  const post = await prisma.staff_Profile.update({
    where: { id: id},
    data: {
        type: type,
        description: description,
        seqnum: seqnum
    },
  })
   return NextResponse.json(post)
}