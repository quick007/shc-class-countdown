import Head from 'next/head'
import { useEffect, useState } from 'react';
import useSWR from "swr";

import Timer from "../components/time"
import fetcher from "../schedules/fetcher"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import End from "../components/end"

import Green from "../schedules/green";
//import Blue from "../schedules/blue";
import F30 from "../schedules/green";
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

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



function f60MM() {
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


function today() {
  const day = d.getDate();
  const month = d.getMonth() + 1;
  return `M${month}D${day}`
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
  const date = month + "-" + "14" 

  //if (data[date] == "Green") {
    return (
      
      <Green ll={ll} />
      
    )
  //}
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
            <div className="rounded bg-opacity-5 backdrop-filter backdrop-blur bg-yellow-500 px-4 py-2 mt-2 border border-yellow-400 border-opacity-60 flex-col lg:flex-row flex items-center justify-center lg:justify-start">
              <h2 className="rounded bg-yellow-400 inline-flex nightwind-prevent px-1 font-medium text-black">Note: </h2>
              <p className="lg:ml-2">Make sure to reload me to get the latest schedule! (I cache in your browser)</p>
            </div>
            <br />
            <div className="inline-flex rounded-md bg-gradient-to-br from-green-200 to-green-300 dark:from-green-400 dark:to-green-500 backdrop-filter backdrop-blur p-1 mt-6 space-x-2">
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

