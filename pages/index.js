import Head from 'next/head';
import Header from '../components/header';
import Blurb from '../components/topBlurb';
import Carousel from '../components/carousel';
import Quotes from '../components/quotes';
import Footer from '../components/footer';
import Contact from '../components/contact'

const Index = () => (
  <div>
    <Head>
      <title>OpenSource @ HackIllinois</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700" rel="stylesheet"/>
    </Head>
    <body>
      <Header/>
      <Blurb/>
      <Quotes/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </body>
    <style jsx>{`
      html {
        /* To make use of full height of page*/
        min-height: 100%;
        margin: 0;
        }
      body {
        display: block;
        margin: 0px;
        min-height: 100%;
        width: 100%;
        box-sizing: border-box;
        color: white;
        background-color: white;
      }
    `}</style>
  </div>
)

export default Index
