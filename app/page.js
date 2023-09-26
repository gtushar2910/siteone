
"use client"
import Carousel1 from "../components/HomeSlider/page1"
import SideInfo from "../components/HomePage/SideInfo"
import News from "../components/HomePage/News"
export default function Home() {
  return (
    <>
      {/* <div className="grid grid-cols-2 grid-flow-col gap-4 px-4 py-4 cardAboutDept">
        <div className="box-border p-4 border-2 px-4" >
          <SideInfo />
        </div>
        <div className="box-border p-4 border-2 px-4 ">
          <Carousel1 />
        </div>

      </div> */}
      <div className="flex  gap-4 px-4 py-4 cardAboutDept place-content-center">
       
        <div className="flex-auto w-64">
        <Carousel1 />
        </div>
         
       
      </div>

    </>
  )
}
