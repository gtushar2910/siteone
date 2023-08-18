import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const staff = await prisma.staff.findUnique({
    where: {
      email: email,
    },
  })

  const publications = await prisma.staff_Publications.findMany({
    where: {
      staff_email: email,
    },
    orderBy: {
      seqnum: 'asc',
    }
  })


  const data = [
    {'staff' : staff},
    {'publications' : publications}
  ]

  return NextResponse.json(data)
}