
import Head from 'next/head'
import HomePage from './dashboard'



export default function Home() {
  return (
    <>
    <Head>
        <title>Finace Tracker</title>
        <link rel="icon" href="/logo2.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
       
 <HomePage/>
    </>
 
   
  
  )
}
