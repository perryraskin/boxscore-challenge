import React from "react"
import Head from "next/head"
import App from "next/app"

import "../styles/tailwind.css"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          ></meta>
          {/* General tags */}
          <meta
            key="description"
            property="description"
            content="The Boxscore Challenge"
          />
          <title key="title">The Boxscore Challenge</title>
          {/* OpenGraph tags */}
          <meta
            key="og:url"
            property="og:url"
            content="https://github.com/perryraskin/boxscore-challenge"
          />
          <meta
            key="og:title"
            property="og:title"
            content="The Boxscore Challenge"
          />
          <meta
            key="og:description"
            property="og:description"
            content="The Boxscore Challenge"
          />
          {/* <meta key="og:image" property="og:image" content="" /> */}
          <meta key="og:type" property="og:type" content="website" />
          {/* Twitter Card tags */}
          <meta
            key="twitter:title"
            property="twitter:title"
            content="The Boxscore Challenge"
          />
          <meta
            key="twitter:description"
            property="twitter:description"
            content="The Boxscore Challenge"
          />
          {/* <meta key="twitter:image" property="twitter:image" content="" /> */}
          <meta key="twitter:card" property="twitter:card" content="summary" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
