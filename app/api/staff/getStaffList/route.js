import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";

export async function GET(request)
{
  const staffs = await prisma.staff.findMany({
    orderBy: {
              seqnum: 'asc',
            }
  });
  return NextResponse.json(staffs)
}

