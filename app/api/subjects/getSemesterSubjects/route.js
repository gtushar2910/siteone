import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const semester = searchParams.get('semester')
  const subjects = await prisma.subject.findMany({
    where: {
      semester: semester,
    }
  })
  return NextResponse.json(subjects)
}