import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma"

export async function PUT(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const post = await prisma.staff_Publications.delete({
    where: { id: id},
  })
  return NextResponse.json(post)
}