import { NextResponse } from 'next/server'
import prisma from "../../../../lib/prisma"

export async function GET(request) {
  const subjects = await prisma.timeTable.findMany({
    orderBy: {
      seqnum: 'desc',
    }
  })
  return NextResponse.json(subjects)
}