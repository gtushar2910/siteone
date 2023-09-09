import prisma from "../../../../lib/prisma"
import { NextResponse } from "next/server";

export async function GET(request)
{
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const password = searchParams.get('password')
    const newPassword = searchParams.get('newPassword')
   const staff = await prisma.staff.findUnique({
    where: {
      email: email,
    },
  })

  let res = "fail"

  if(staff.password == password) {
    const post = await prisma.staff.update({
        where: { email: email},
        data: {
            password: newPassword
        },
      })
      res = "pass"
  }


  return NextResponse.json(res)
}
