import Link from 'next/link'
import { MainLayout } from '../../components/Layout/MainLayout'
import { DarkLayout } from '../../components/Layout/DarkLayout'


export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/about/about.js</code>
      </p>
    </>
  )
}


// Funcion MUlti layout
AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}