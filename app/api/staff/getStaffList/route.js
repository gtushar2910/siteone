import { PrismaClient } from '@prisma/client'
import { NextResponse } from "next/server";

export async function GET(request)
{
  let prisma = new PrismaClient();
  const staffs = await prisma.staff.findMany({
    orderBy: {
              seqnum: 'asc',
            }
  });
  return NextResponse.json(staffs)
}

