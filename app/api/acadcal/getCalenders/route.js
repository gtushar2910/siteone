import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const ucd = searchParams.get('ucd')
  const list = await prisma.academicCalender.findMany({
    where: {
      ucd: ucd,
    },
    orderBy: {
        seqnum: 'desc'
    }
  })

  return NextResponse.json(list)
}