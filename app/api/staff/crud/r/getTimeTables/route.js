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

  const timetables = await prisma.staff_Timetable.findMany({
    where: {
      staff_email: email,
    },
    orderBy: {
      academic_year: "desc"
    }
  })


  const data = [
    {'staff' : staff},
    {'timetables' : timetables}
  ]

  return NextResponse.json(data)
}