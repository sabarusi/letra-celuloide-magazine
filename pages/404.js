import Head from "next/head";
export default function Custom404() {
    return <div>
            <Head>
            <title>Letra Celuloide - Página no encontrada</title>
            <meta name="description" content="Revista de cine y literatura" />
            <link rel="icon" href="/favlogo.ico" />
            <link rel="stylesheet" href="/styles/main.css" />
            <link rel="stylesheet" href="/styles/404.css" />
            </Head>
            <div className="container">
              <img src="/img/4042.png"></img>
            </div>
            </div>
  }