import nightwind from "nightwind/helper"
import Link from "next/link"
import Head from "next/head"

export default function navbar() {
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
                    <div className="flex items-center font-semibold cursor-pointer mr-5" onClick={() => nightwind.toggle()}>
                        Switch Theme
                    </div>
                </div>
            </nav>
        </>
    )
}