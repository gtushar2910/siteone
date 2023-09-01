
"use client"
import Carousel from "../components/HomeSlider/page"

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
        <div className="box-border p-4 border-2 px-4" >

        </div>
        <div className="box-border p-4 border-2 px-4 ">
          <Carousel />
        </div>

      </div>

    </>
  )
}
