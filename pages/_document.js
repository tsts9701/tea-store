import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="description" content="Якісний кратом по найкращим цінам" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="кратом, kratom, green maeng, white maeng, зелений кратом, заменитель кратома, замінник кратома, матча" />
        <meta name="og:title" content="Інтернет магазин колекційного чаю" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://kratom-in.com.ua" />
        <meta property="og:site_name" content="kratom-in.com.ua"></meta>
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
