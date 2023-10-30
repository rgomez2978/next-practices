import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui";

type Props = {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || 'Pokemon APP'}</title>
        <meta name="author" content="Ronald Gomez" />
        <meta name="description" content={`Informacion sobre pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex `} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px',
      }}>
        {children}
      </main>

    </>

  )
}