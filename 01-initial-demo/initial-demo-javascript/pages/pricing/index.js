import Link from 'next/link'
import { MainLayout } from '../../components/Layout/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/pricing/pricing.js</code>
      </p>
    </>
  )
}


// Funcion MUlti layout
AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}