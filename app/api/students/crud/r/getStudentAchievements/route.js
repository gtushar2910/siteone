import prisma from "../../../../../../lib/prisma"
import { NextResponse } from "next/server";

export async function GET(request)
{
  const students = await prisma.StudentAchievements.findMany({
    orderBy: {
              year: 'desc',
            }
  });
  return NextResponse.json(students)
}

