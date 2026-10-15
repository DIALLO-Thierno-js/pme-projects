"use client"
import Link from 'next/link'

function ErrorPage({error, reset}: {error: Error & {digest?: string}; reset: () => void}) {
  return (
    <div>
        <h1>Oups, un problème est survenu</h1>
        <p>Nous n’avons pas pu afficher cette destination</p>
        <button onClick={reset}>Réessayer</button>
        <Link href="/contact">Nous contacter</Link>
    </div>
  )
}

export default ErrorPage