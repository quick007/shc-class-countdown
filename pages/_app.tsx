import 'tailwindcss/tailwind.css'
import nightwind from "nightwind/helper"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  <Head>
    <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
    <meta name="title" content="SHC Clock" />
    <meta name="description" content="The daily schedule for SHC! Updates daily based on our API. " />
    <meta name="keywords" content="schedule, clock, shc, api, daily, updated, school" />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="author" content="Lukas" />

    <meta name='application-name' content='SHC Clock' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    <meta name='apple-mobile-web-app-title' content='Clock' />
    <meta name='description' content='The daily schedule for SHC! Updates daily based on our API.' />
    <meta name='format-detection' content='telephone=no' />
    <meta name='mobile-web-app-capable' content='yes' />
    {/*<meta name='msapplication-config' content='/icons/browserconfig.xml' />*/}
    <meta name='msapplication-TileColor' content='#18664f' />
    <meta name='msapplication-tap-highlight' content='no' />

    <link rel='apple-touch-icon' href='/SHC-app.png' />
    {/*<link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
    <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
    <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />*/}
    <link rel='manifest' href='/manifest.json' />
    <link rel='mask-icon' href='/SHC-app.png' color='#18664f'/>
    <link rel='shortcut icon' href='/favicon.ico' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:url' content='https://yourdomain.com' />
    <meta name='twitter:title' content='SHC Clock' />
    <meta name='twitter:description' content='The daily schedule for SHC! Updates daily based on our API. ' />
    <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />
    <meta name='twitter:creator' content='@DavidWShadow' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='SHC Clock' />
    <meta property='og:description' content='The daily schedule for SHC! Updates daily based on our API. ' />
    <meta property='og:site_name' content='SHC Clock' />
    <meta property='og:image' content='https://shc-clock.vercel.app/SHC-app.png' />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
