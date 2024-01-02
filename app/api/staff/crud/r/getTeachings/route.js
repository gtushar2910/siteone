import { NextResponse } from 'next/server'
import prisma from "../../../../../../lib/prisma"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const staff = await prisma.staff.findUnique({
    where: {
      email: email,
    },
  })

  const teachings = await prisma.staff_Teachings.findMany({
    where: {
      staff_email: email,
    },
    orderBy: [{
      academic_year: "desc"
    },
    {
      semester: "asc"
    }
  ]
  })


  const data = [
    {'staff' : staff},
    {'teachings' : teachings}
  ]

  return NextResponse.json(data)
}