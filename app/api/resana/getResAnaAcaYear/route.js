import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const year = searchParams.get('academic_year')
  const semesters = await prisma.resAna.findMany({
    where: {
      academic_year: year,
    }
  })
  return NextResponse.json(semesters)
}