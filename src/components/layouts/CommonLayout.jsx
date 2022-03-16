import Head from "next/head";

import Header from "./Header";

export default function CommonLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title : "next-js-microcms-example"}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <style jsx global>
        {`
          html,
          body {
            background: #fff;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
}
