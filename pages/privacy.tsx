import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function privacy() {
	return (
		<>
			<div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
				<Navbar />
				<div className="flex-1 max-w-screen-xl mx-auto w-full my-10 px-2 prose lg:prose-lg dark:text-gray-200">
					<h1 className="dark:text-gray-300">Privacy Policy</h1>
						This privacy policy ("policy") will help you understand how [name] ("us", "we", "our") uses and
						protects the data you provide to us when you visit and use [website] ("website", "service").
						We reserve the right to change this policy at any given time, of which you will be promptly
						updated. If you want to make sure that you are up to date with the latest changes, we advise
						you to frequently visit this page.<br />
						<h3 className="dark:text-gray-300">What User Data We Collect</h3>
						When you visit the website, we may collect the following data:
						<ul>
						<li>Your contact information and email address.</li>
						<li>Other information such as interests and preferences.</li></ul><br />
						<h3 className="dark:text-gray-300">Why We Collect Your Data</h3>
						We are collecting your data for several reasons:
						<ul>
						<li>To better understand your needs.</li>
						<li>To improve our services and products.</li>
						<li>To send you promotional emails containing the information we think you will find
						interesting.</li>
						<li>To contact you to fill out surveys and participate in other types of market research.</li>
						<li>To customize our website according to your online behavior and personal preferences.</li></ul><br />
							<h2 className="dark:text-gray-300">Cookies Policy</h2>
							Last updated: 9/23/2021 <br />
							Lukas ("us", "we", or "our") uses cookies on SHC Clock (the
							"Service"). By using the Service, you consent to the use of cookies.
							Our Cookies Policy explains what cookies are, how we use cookies, your choices regarding cookies and further information
							about cookies.<br />
							<h3 className="dark:text-gray-300">What are cookies</h3>
							Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is
							stored in your web browser and allows the Service or a third­party to recognize you and make your
							next visit easier and the Service more useful to you.
							Cookies can be "persistent" or "session" cookies.<br />
							<h3 className="dark:text-gray-300">How we use cookies</h3>
							When you use and access the Service, we may place a number of cookies files in your web
							browser.<br />
							We use cookies for the following purposes: to enable certain functions of the Service, to provide
							analytics, and to store your preferences.<br />
							We use both session and persistent cookies on the Service and we use different types of cookies to
							run the Service:
							<ul>
								­<li>Essential cookies. We may use essential cookies to authenticate users and prevent fraudulent use
								of user accounts..</li>
								<li>Data cookies. We may store data in your cookies such as the classes you take or when you eat lunch.</li>
							</ul><br />
							<h3 className="dark:text-gray-300">What are your choices regarding cookies</h3>
							If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit
							the help pages of your web browser.
							Please note, however, that if you delete cookies or refuse to accept them, you might not be able to
							use all of the features we offer, you may not be able to store your preferences, and some of our
							pages might not display properly.<br />
				</div>
				<Footer />
			</div>        
		</>
	)
}