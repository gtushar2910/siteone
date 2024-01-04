import prisma from "../../../../../lib/prisma"
import { NextResponse } from "next/server";

export async function GET(request)
{
  const list = await prisma.indVisit.findMany({
    orderBy: {
              seqnum: 'desc',
            }
  });
  return NextResponse.json(list)
}

