import { NextResponse } from 'next/server'
import prisma from "../../../../lib/prisma"

export async function GET(request) {
  const list = await prisma.ResultAnalysisUG.findMany({
    orderBy: {
              year: 'desc',
            }
  });
  return NextResponse.json(list)
}