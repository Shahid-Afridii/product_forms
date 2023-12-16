import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
 
  

  

  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Product by Shahid" />
        
        {/* <link rel="shortcut icon" href="/favi.jpg" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap" rel="stylesheet"/>
        
        {/* Include the Google Fonts */}
     
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
