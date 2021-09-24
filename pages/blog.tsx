import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function privacy() {
	return (
		<>
			<div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
				<Navbar />
				<div className="flex-1 grid place-items-center max-w-screen-xl mx-auto w-full my-10 px-2 prose lg:prose-xl dark:text-gray-200">
					<h1 className="dark:text-gray-300">Cooming soon.</h1>
						
				</div>
				<Footer />
			</div>        
		</>
	)
}