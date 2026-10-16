import Link from 'next/link'

function NotFound() {
  return (
    <div>
        <h1>Page introuvable</h1>
        <p>La page que vous cherchez n’existe pas ou a été déplacée.</p>
        <Link href="/">Acceuil</Link>
        <Link href="/destinations">Destination</Link>
    </div>
  )
}

export default NotFound