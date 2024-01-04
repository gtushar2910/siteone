import prisma from "../../../../../lib/prisma"
import { NextResponse } from "next/server";

export async function GET(request)
{
  const staffs = await prisma.converse.findMany({
    orderBy: {
              seqnum: 'desc',
            }
  });
  return NextResponse.json(staffs)
}

