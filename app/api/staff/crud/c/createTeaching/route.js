import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma"

export async function POST(request) {
  const data = await request.json()
  const academic_year = data.academic_year
  const semester= data.semester
  const subject_name= data.subject_name
  const subject_code= data.subject_code
  const classname= data.classname
  const syllabus_url= data.syllabus_url
  const  course_url= data.course_url
  const materials_url= data.materials_url
  const  midterm_url= data.midterm_url
  const tutorial_url=data.tutorial_url
  const staff_email=data.staff_email
//    console.log(academic_year)
//    console.log(semester)
//    console.log(subject_code)
//    console.log(subject_name)
//    console.log(classname)
//    console.log(course_url)
//    console.log(syllabus_url)
//    console.log(midterm_url)
//    console.log(materials_url)
//    console.log(tutorial_url)
// console.log(staff_email)
  const post = await prisma.staff_Teachings.create({
    data: {
        academic_year: academic_year,
        semester: semester,
        subject_name: subject_name,
        subject_code: subject_code,
        classname: classname,
        syllabus_url: syllabus_url,
        course_url: course_url,
        materials_url: materials_url,
        midterm_url: midterm_url,
        tutorial_url: tutorial_url,
        staff_email: staff_email
    },
  })
   return NextResponse.json(post)
}