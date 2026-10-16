
import Link from 'next/link'
import { destinations } from '../../data/destinations'
import {notFound} from 'next/navigation'



async function DestinationDetailPage({params }: PageProps<"/destinations/[slug]"> ){
   
    const {slug} = await params
    const destination = destinations.find(destination=> destination.slug === slug)
   
    if(!destination){
         notFound()
    }
    
  return (
    <div className="mt-4">
        <h2>Nom: {destination.nom}</h2>
        <p>Description: {destination.description}</p>
        <p>Prix : {destination.prix} FCFA</p>
        <Link href="/destinations" className="text-blue-500 hover:underline">Retour aux destinations</Link>
    </div>
  )
}

export default DestinationDetailPage