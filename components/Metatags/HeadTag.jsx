import React from 'react'
import Head from "next/head";
function HeadTag() {
  return (
    <Head>
        <link rel="icon" type="image/x-icon" href="icon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DataFlex is a data-driven platform that helps you to build your business or your daily jobs. We help you to build your business with the help of data. Data for everyone!" />
        <title>DataFlex - Data for everyone!</title>
        <meta name="robots" content="index, archive" />
        <meta property="og:title" content="DataFlex" />
        <meta property="og:image" content="dataflex-logo.png" />
        

    </Head>
  )
}

export default HeadTag