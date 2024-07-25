import { NextResponse } from 'next/server'
import prisma from "../../../../../../lib/prisma"
import fs from 'fs'

export async function PUT(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const result = await prisma.staff_Timetable.findUnique({
    where: { id: id},
  })
  const post = await prisma.staff_Timetable.delete({
    where: { id: id},
  })
  return NextResponse.json(post)
}