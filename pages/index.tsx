import Head from 'next/head'
import { useEffect, useState } from 'react';
import Timer from "../components/time"
import schedule from "../components/schedules"

import Navbar from "../components/navbar"

const d = new Date();

function toSchoolEnd() {
  const end = new Date(d.getFullYear()+1, 4, 19);
  if (d.getMonth()==11 && d.getDate()>25) 
  {
  end.setFullYear(end.getFullYear()+1); 
  }  
  var one_day=1000*60*60*24;
  return Math.ceil((end.getTime()-d.getTime())/(one_day))
}

function blue(ll: boolean) {
  const blue = ["8:00 - 9:15|7", "9:30 - 10:55|1", "11:50 - 1:05?11:05-12:20|2", "1:15 - 2:30|3"]
  var output = []
  blue.forEach(element => {
    const sp = element.split("|")
    const block = sp.pop()
    if (!(block == "2")) {
      output.push(
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
          <div className="flex">
            <h2 className="font-semibold">Block {block}:</h2> 
            {sp.shift()}
          </div>
          <div>
          {block == "1" ? <div className="rounded bg-blue-500 px-1 font-medium text-gray-50 nightwind-prevent">Announcements</div> : ""}
          </div>
        </div>
      )
    } else {
      if (ll == true) {
        var time = sp.shift().split("?").shift()
      } else {
        var time = sp.shift().split("?").pop()
      }
        output.push(
          <>
            {ll ? <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"><h2 className="font-semibold">Lunch</h2></div> : ""}
            <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
              <div className="flex">
                <h2 className="font-semibold">Block {block}:</h2> 
                {time}
              </div>
            </div>
            {ll ? "" : <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"><h2 className="font-semibold">Lunch</h2></div>}
          </>
        )
      
    }
  })
  return (output);
}


export default function Home() {
  const [lowerLunch, setLowerLunch] = useState(true)
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <div className="flex-1 max-w-screen-xl mx-auto w-full my-10">
          <h1 className="text-5xl font-semibold"><Timer /></h1>
          <a href="https://www.shcp.edu/academics/academic-calendar" className="text-sm font-medium group cursor-pointer">
            ~{toSchoolEnd()} days until the end of school
            <span className="hidden group-hover:block absolute z-10 rounded shadow-lg p-1 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur mt-[-3.6rem]">Including weeknds and holidays</span>
          </a>
          <br />
          <div className="inline-flex rounded-md bg-gradient-to-br from-green-200 to-green-300 dark:from-green-400 dark:to-green-500 backdrop-filter backdrop-blur p-1 mt-6 space-x-2">
            <div className={"rounded-md p-1 font-medium hover:ring-2 transition cursor-pointer " + (lowerLunch ? "bg-gray-300 bg-opacity-50" : "")} onClick={() => setLowerLunch(true)}>Lower Lunch</div>
            <div className={"rounded-md p-1 font-medium hover:ring-2 transition cursor-pointer " + (!lowerLunch ? "bg-gray-300 bg-opacity-50" : "")} onClick={() => setLowerLunch(false)}>Upper Lunch</div>
          </div>
          
          {blue(lowerLunch)}
        </div>
        <div className="bg-red-50 p-2">Footer</div>
      </div>
    </>
  )
}

