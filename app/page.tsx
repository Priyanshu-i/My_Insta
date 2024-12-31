import Head from 'next/head'
import Header from "./components/Header";
import Feed from './components/Feed';
import Navbar from './components/Navbar';


export default function Home() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Head>
        <title>My_Insta</title>
        <meta name = 'description' content= 'generate'></meta>
        <link rel = 'icon' href = "/favicon.ico" />
      </Head>
{/* Header */}
      <Header/>
      <Navbar/>
      
      {/* Feed */}

      <Feed/>
      
      {/* Modal */}
    </div>
  );
}
