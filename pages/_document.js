import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="description" content="Якісний кратом по найкращим цінам" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="кроссовки, спортивная обувь, кроссовки nike, кроссовки adidas, кроссовки jordan, купить nike, купить jordan, обувь из Европы, кроссовки из Европы" />
        <meta name="og:title" content="Kratom-in.com.ua — інтернет магазин колекційного чаю" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://tea-store-tau.vercel.app" />
        <meta property="og:site_name" content="Kratom in"></meta>
        <meta name="og:image" content="https://tea-store-tau.vercel.app/logotype2.png" />
        <meta property="og:image:secure_url" content="https://tea-store-tau.vercel.app/logotype2.png" /> 
        <meta property="og:image:type" content="image/png" /> 
        <meta property="og:image:width" content="1200" /> 
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
