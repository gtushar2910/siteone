import { NextResponse } from 'next/server'
import prisma from "../../../../../../lib/prisma"

export async function POST(request) {
  const data = await request.json()
  const id = data.id //data.get("id")
  const academic_year = data.academic_year
  const semester = data.semester
  const seqnum = data.seqnum
  const tt_softcopy= data.tt_softcopy

  const post = await prisma.staff_Timetable.update({
    where: { id: id},
    data: {
      seqnum: seqnum,
        academic_year: academic_year,
        semester: semester,
        tt_softcopy: tt_softcopy,
    },
  })
   return NextResponse.json(post)
}