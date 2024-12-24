import Head from 'next/head'
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <head>
        <title>My_Insta</title>
        <meta name = 'description' content= 'generate'></meta>
        <link rel = 'icon' href = "/favicon.ico" />
      </head>
      {/* Header */}
      <Header/>
      {/* Feed */}
      {/* Modal */}
    </div>
  );
}
