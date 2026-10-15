import Link from 'next/link'
import { destinations } from '../data/destinations'



function DestinationPage() {
  
  return (
    <div>
        <h1>Destinations</h1>
        <p>Découvrez nos destinations</p>
        <div>
        {destinations.map(destination  => (
          <Link href= {`/destinations/${destination.slug}`} key={destination.slug}
          className="block rounded border border-zinc-200 p-4 hover:bg-zinc-400">
            <h2>{destination.nom} </h2>
            <p>{destination.description}</p>
            </Link>

        )

        )
        }
        </div>
    </div>
  )
}

export default DestinationPage