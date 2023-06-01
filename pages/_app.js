import '../styles/globals.css'
import Footer from '../components/navigation/footer/footer'
import Header from '../components/navigation/header/header'

function MyApp({ Component, pageProps }) {
  console.log("MyApp",  pageProps)
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer data={pageProps}/>
    </>
  )
  
 
}

export default MyApp
