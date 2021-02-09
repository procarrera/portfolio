import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ETV4CFCTY4"
        />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ETV4CFCTY4');
        `,
          }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
