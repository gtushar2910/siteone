import prisma from "../../../../lib/prisma"
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../../lib/auth"

export async function GET(request)
{
  const session = await getServerSession(authOptions);
    if(session){
      const { searchParams } = new URL(request.url)
      const email = session.user.email//searchParams.get('email')
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
    }else{
      return NextResponse.json("Unauthorized access detected", {
        status: 401,
      });
    }
    
}
