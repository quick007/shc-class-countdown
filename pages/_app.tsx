import 'tailwindcss/tailwind.css'
import nightwind from "nightwind/helper"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  <Head>
    <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
