import { NextResponse } from 'next/server'
import prisma from "../../../../../../lib/prisma"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const cohort = searchParams.get('cohort')
  const students = await prisma.student.findMany({
    where: {
      cohort: cohort,
    },
    orderBy: {
        enrollment_no: 'asc'
    }
  })
  return NextResponse.json(students)
}