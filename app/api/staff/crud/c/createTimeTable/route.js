import { NextResponse } from 'next/server'
import prisma from "../../../../../../lib/prisma"

export async function POST(request) {
  const data = await request.json()
  const id = data.id //data.get("id")
  const academic_year = data.academic_year
  const semester = data.semester
  const tt_softcopy= data.tt_softcopy
  const staff_email = data.staff_email

  const post = await prisma.staff_Timetable.create({
    data: {
        academic_year: academic_year,
        semester: semester,
        tt_softcopy: tt_softcopy,
        staff_email: staff_email
    },
  })
   return NextResponse.json(post)
}