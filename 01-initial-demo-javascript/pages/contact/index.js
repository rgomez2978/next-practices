import Link from 'next/link'
import { MainLayout } from '../../components/Layout/MainLayout'

export default function AboutPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/contact/contact.js</code>
      </p>
    </MainLayout>
  )
}
