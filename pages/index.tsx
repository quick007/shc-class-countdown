import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSWR from "swr";

import Timer from "../components/time";
import fetcher from "../lib/fetcher";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import End from "../components/end"

import Green from "../schedules/green";
import Blue from "../schedules/blue";
import F30 from "../schedules/f30";
import F60BD from "../schedules/f60BD";
import F60MM from "../schedules/f60MM";
import FSplit from "../schedules/f30split"

const d = new Date();

function toSchoolEnd() {
  const end = new Date(d.getFullYear()+1, 4, 19);
  if (d.getMonth()==11 && d.getDate()>25) 
  {
  end.setFullYear(end.getFullYear()+1); 
  }  
  const one_day=1000*60*60*24;
  return Math.ceil((end.getTime()-d.getTime())/(one_day))
}







function daily(ll: boolean) {
  const { data, error } = useSWR("/api/daily", fetcher);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const M = "M";
  const D = "D";

  if (!data) {
    return (
      <>
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between animate-pulse">
          <div className="rounded w-1/4 p-3 bg-blue-500" />
          <div className="rounded w-1/12 p-3 bg-blue-500" />
        </div>
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between animate-pulse">
          <div className="rounded w-1/4 p-3 bg-blue-500" />
          <div className="rounded w-1/12 p-3 bg-blue-500" />
        </div>
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between animate-pulse">
          <div className="rounded w-1/4 p-3 bg-blue-500" />
          <div className="rounded w-1/12 p-3 bg-blue-500" />
        </div>
  </>
    )
  }

  if (error) {
    return (
      <div className="rounded bg-opacity-5 backdrop-filter backdrop-blur bg-red-500 px-4 py-2 mt-6 border border-red-400 border-opacity-60 flex-col lg:flex-row flex items-center justify-center lg:justify-start">
        <h2 className="rounded bg-red-400 inline-flex nightwind-prevent px-1 font-medium text-black">Error: </h2>
        <p className="lg:ml-2">Failed to fetch api! Please file an issue <a href="https://github.com/quick007/shc-class-countdown/issues" className="hover:underline text-blue-400 font-medium cursor-pointer">here</a></p>
      </div>
    )
  }

  const date = month + "/" + day

  if (!data[date]) {
    return (
      <div className="rounded bg-opacity-5 backdrop-filter backdrop-blur bg-green-500 px-4 py-2 mt-6 border border-green-400 border-opacity-60 flex-col lg:flex-row flex items-center justify-center lg:justify-start">
        <h2 className="rounded bg-green-400 inline-flex nightwind-prevent px-1 font-medium text-black">No class!</h2>
        <p className="lg:ml-2">Please make sure to check your schoology calender to confirm this</p>
      </div>
    )
  }

  const isWierd = data[date].charAt(0)
  const char2 = data[date].charAt(1)
  function diffSchedule() {
    //normal schedule
    if (isWierd == "G") {
      return [1, 2, 3]
    } else if (isWierd == "B") {
      return [4, 5, 6]
      //semi wierd schdule
    } else if (isWierd == "2") {
      if (char2 == "G") {
        return [2, 3, 1]
      } else if (char2 == "B") {
        return [5, 6, 4]
      }
      //very wierd schedule
    } else if (isWierd == "3") {
      if (char2 == "G") {
        return [3, 1, 2]
      } else if (char2 == "B") {
        return [6, 4, 5]
      }
    }
    
  }
  if (data[date].includes("Green")) {
    return <Green ll={ll} shType={isWierd} /> ;
  }
  else if (data[date].includes("Blue")) {
    return <Blue ll={ll} shType={isWierd} />;
  }
  else if (data[date].includes("F30")) {
    return <F30 shType={diffSchedule()} />;
  }
  else if (data[date].includes("F60BD")) {
    return <F60BD shType={diffSchedule()} />;
  }
  else if (data[date].includes("F60MM")) {
    return <F60MM shType={diffSchedule()} />;
  }
  else if (data[date].includes("FSplit")) {
    return <FSplit ll={ll} shType={diffSchedule()} />;
  }
  else if (data[date].includes("custom")) {
    return custom();
  }
  else {
    return (
      <div className="rounded bg-opacity-5 backdrop-filter backdrop-blur bg-green-500 px-4 py-2 mt-6 border border-green-400 border-opacity-60 flex-col lg:flex-row flex items-center justify-center lg:justify-start">
        <h2 className="rounded bg-green-400 inline-flex nightwind-prevent px-1 font-medium text-black">No class!</h2>
        <p className="lg:ml-2">Please make sure to check your schoology calender to confirm this</p>
      </div>
    )
  }
}

export default function Home() {
  const [lowerLunch, setLowerLunch] = useState(true)
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <div className="flex-1 max-w-screen-xl mx-auto w-full my-10">
          <div className="mx-5">
            <h1 className="text-5xl font-semibold"><Timer /></h1>
            <a href="https://www.shcp.edu/academics/academic-calendar" className="text-sm font-medium group cursor-pointer">
              ~{toSchoolEnd()} days until the end of school
              <span className="hidden group-hover:block absolute z-10 rounded shadow-lg p-1 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur mt-[-3.6rem]">Including weeknds and holidays</span>
            </a>
            <span className="text-sm font-medium"><End /></span>
            <div className="rounded bg-opacity-5 backdrop-filter backdrop-blur bg-blue-500 px-4 py-2 mt-2 border border-blue-400 border-opacity-60 flex-col lg:flex-row flex items-center justify-center lg:justify-start">
              <h2 className="rounded bg-blue-400 inline-flex nightwind-prevent px-1 font-medium text-black">Info: </h2>
              <p className="lg:ml-2">I now change my schedule at midnight (based on your computers time), API documentation coming soon!</p>
            </div>
            <br />
            <div className="inline-flex rounded-md bg-gradient-to-br from-green-200 to-green-300 dark:from-green-400 dark:to-green-500 backdrop-filter backdrop-blur p-1 mt-6 space-x-2 select-none">
              <div className={"rounded-md p-1 font-medium hover:ring-2 transition cursor-pointer " + (lowerLunch ? "bg-gray-300 bg-opacity-50" : "")} onClick={() => setLowerLunch(true)}>Lower Lunch</div>
              <div className={"rounded-md p-1 font-medium hover:ring-2 transition cursor-pointer " + (!lowerLunch ? "bg-gray-300 bg-opacity-50" : "")} onClick={() => setLowerLunch(false)}>Upper Lunch</div>
            </div>
            {daily(lowerLunch)}

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}


/**
 * Why is this here?
 * 
 * During certin "special" school days when the school decides to make the schedule a bit *extra* messed up, I have an extra, easy config solution. 
 * It doesn't look as good, but that isn't exactly the point.
 */

function custom() {
  const blue = ["9:00 - 10:05|4", "10:05 - 10:15|Walkathon HR", "10:25 - 11:25|Founders", "11:25 - 12:00|Lunch", "12:10 - 1:15|5", "1:25 - 2:30|6"]
  var output = []
  blue.forEach(element => {
    const sp = element.split("|")
    const block = sp.pop()
    output.push(
      <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
        <div className="flex">
          <h2 className="font-semibold">Block {block}:</h2> 
          {sp.shift()}
        </div>
        <div>
        
        </div>
      </div>
    )
  })
  return output;
}