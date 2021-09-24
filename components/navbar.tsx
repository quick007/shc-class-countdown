import nightwind from "nightwind/helper"
import Link from "next/link"
import Head from "next/head"
import { useCookies } from 'react-cookie';
import { useState } from "react";

export default function navbar() {
	const [cookies, setCookies] = useCookies();
	const [navOpen, setNavOpen] = useState(false);
	const [classesSelector, setClassesSelector] = useState(false);
	return (
		<>
			<Head>
				<title>SHC Clock</title>
				<script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
			</Head>
			<nav className="h-14 bg-gray-300 shadow-md bg-opacity-50 backdrop-filter backdrop-blur sticky top-0 z-40 text-gray-900">
				<div className="max-w-screen-xl mx-auto flex flex-grow h-14 justify-between">
					<Link href="/">
						<a className="flex items-center font-medium text-lg ml-5">
							<span className="text-[#18664f] dark:text-green-600 font-bold">SHC</span>  <svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</a>
					</Link>
					<div className="flex items-center relative">
						<div className="flex items-center font-semibold cursor-pointer mr-5" onClick={() => nightwind.toggle()}>
							Switch Theme
						</div>
						<div className="p-1 rounded-full bg-white dark:bg-[#2c2f33] opacity-70 hover:brightness-75 hover:filter transition cursor-pointer " onClick={() => setNavOpen(!navOpen)}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
							</svg>
							
						</div>
						{navOpen ? 
						<ul className="py-2 rounded-md bg-white dark:bg-[#2c2f33] bg-opacity-75 backdrop-filter backdrop-blur absolute z-10 right-2 mt-[9rem] font-medium text-sm space-y-1">
							<li className="px-3 py-1 hover:brightness-[1.15] hover:filter hover:bg-white dark:hover:bg-[#2c2f33] transition cursor-pointer">Add Classes</li>
							<Link href="/blog"><a><li className="px-3 py-1 hover:brightness-[1.15] hover:filter hover:bg-white dark:hover:bg-[#2c2f33] transition cursor-pointer">Blog</li></a></Link>
							<Link href="/privacy"><a><li className="px-3 py-1 hover:brightness-[1.15] hover:filter hover:bg-white dark:hover:bg-[#2c2f33] transition cursor-pointer">Privacy Policy</li></a></Link>
						</ul> : "" }
					</div>
				</div>
			</nav>
		</>
	)
}